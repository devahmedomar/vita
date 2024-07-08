import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../../../../services/profile/profile.service';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileBreadCrumbData: Ibreadcrumb = {
    title: 'My Profile',
    prev: 'home',
  };
  profileForm: FormGroup = new FormGroup({});
  isUpdateMode: boolean = false;  // Determines if the form is in update mode
  selectedFile: File | null = null;
  profileImageUrl: string | null = null;

  constructor(private fb: FormBuilder, private profileService: ProfileService,private toaster:ToastrService) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      male: [true],
      dateOfBirth: ['']
    });

    const authToken = localStorage.getItem('eToken');

    if (authToken) {
      this.profileService.getProfile().subscribe(
        response => {
          // console.log('Profile data fetched:', response);
          if (response) {
            this.isUpdateMode = true;  // Set to true if profile data exists
            this.profileForm.patchValue(response.data.user);  // Populate the form with the profile data
            this.profileImageUrl = response.data.user.picture; // Assuming profile image URL is part of the response
          }
        },
        error => {
          console.error('Error fetching profile data', error);
          this.toaster.error('Error fetching profile data')
        }
      );
    } else {
      console.error('User not authenticated');
      this.toaster.error('User not authenticated Please Login First !')
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.profileImageUrl = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const authToken = localStorage.getItem('eToken');
      if (authToken) {
        this.profileService.updateProfile(this.profileForm.value).subscribe(
          response => {
            console.log('Profile updated successfully', response);
            this.toaster.success('Profile updated successfully');
            if (this.selectedFile) {
              this.uploadProfileImage(this.selectedFile);
            }
          },
          error => {
            console.error('Error updating profile', error);
          }
        );
      } else {
        console.error('User not authenticated');
        this.toaster.error('User not authenticated Please Login First !')
      }
    }
  }

  uploadProfileImage(file: File) {
    this.profileService.updateProfileImage(file).subscribe(
      response => {

        console.log('Profile image updated successfully', response);
      },
      error => {
        this.toaster.success('Error updating profile image');
        console.error('Error updating profile image', error);
      }
    );
  }

  onDeleteImage() {
    this.profileService.deleteProfileImage().subscribe(
      response => {
        console.log('Profile image deleted successfully', response);
        this.toaster.success('Profile image deleted successfully');
        this.profileImageUrl = null;
      },
      (error) => {
        this.toaster.error('Error deleting profile image');
        console.error('Error deleting profile image', error);
      }
    );
  }
}
