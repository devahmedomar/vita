import { Component, OnInit } from '@angular/core';
import { Icategory, IMainCategory } from 'src/app/models/icategory';
import { Ilanguage } from 'src/app/models/ilanguage';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mainCategories: IMainCategory[] | undefined;
  constructor(private categoryService: CategoryService) {}
  ngOnInit() {
    this.categoryService.getMainandSubCategories().subscribe((data: any) => {
      if (data && data.success) {
        this.mainCategories = data.data.mainCategories;
        console.log(this.mainCategories);
      }
    });
  }
}
