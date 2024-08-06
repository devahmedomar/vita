import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() breadcrumbData: Ibreadcrumb = {
    title: "",
    prev: ""
  };
  @Input() breadCrumbBgImage:string = "assets/images/bgfooter.jpeg";
  @Input() overlayOpacity: number=5;
  translatedTitle: string = '';
  translatedPrev: string = '';
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get(`BREADCRUMB.${this.breadcrumbData.title.toUpperCase()}`).subscribe((res: string) => {
      this.translatedTitle = res;
    });

    this.translate.get(`BREADCRUMB.${this.breadcrumbData.prev.toUpperCase()}`).subscribe((res: string) => {
      this.translatedPrev = res;
    });
  }
}
