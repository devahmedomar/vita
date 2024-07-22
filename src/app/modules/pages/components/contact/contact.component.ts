import { Component, OnInit } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { ContactService } from 'src/app/services/contact/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contactBreadCrumbData: Ibreadcrumb = {
    prev: "home",
    title: "CONTACT"
  };
  isLoading = false;
  isSubmitted = false;
  errorMessage = '';

  constructor(private _ContactService: ContactService, private fb: FormBuilder,private toaster:ToastrService,private translate:TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const formValues = this.contactForm.value;
      this._ContactService.contactUs(formValues).subscribe(
        response => {
          console.log('Message sent successfully', response);
          this.isLoading = false;
          this.isSubmitted = true;
          this.toaster.success("Message sent successfully")
          this.contactForm.reset();
          setTimeout(() => this.isSubmitted = false, 3000);
        },
        error => {
          console.error('Error sending message', error);
          this.isLoading = false;
          this.errorMessage = 'Error sending message. Please try again.';
          setTimeout(() => this.errorMessage = '', 3000);
        }
      );
    }
  }
}
