import { Component, OnInit } from '@angular/core';
import { Iadvertisement } from 'src/app/models/iadvertisement';
import { AdvertisementService } from 'src/app/services/advertisement/advertisement.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
})
export class AdsComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  // ads:string[]=[]
  advertisements: Iadvertisement[] = [];
  constructor(private advertisementService: AdvertisementService) {}
  ngOnInit(): void {
    this.advertisementService.getAdvertisements().subscribe(
      (data: Iadvertisement[]) => {
        this.advertisements = data;
      },
      (error) => {
        console.error('Failed to fetch advertisements', error);
      }
    );

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    // this.ads=[
    //   "assets/images/ads.png",
    //   "assets/images/ads2.png"
    // ]
  }
}
