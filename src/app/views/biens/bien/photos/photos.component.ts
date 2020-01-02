import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://cele-immo-sandbox.s3.eu-west-2.amazonaws.com/admin%40gmail.com/5dffde8ed5952a28235b28be/memoire1.png',
        medium: 'https://cele-immo-sandbox.s3.eu-west-2.amazonaws.com/admin%40gmail.com/5dffde8ed5952a28235b28be/memoire1.png',
        big: 'https://cele-immo-sandbox.s3.eu-west-2.amazonaws.com/admin%40gmail.com/5dffde8ed5952a28235b28be/memoire1.png'
      },
      {
        small: 'https://cele-immo-sandbox.s3.eu-west-2.amazonaws.com/admin%40gmail.com/5dffde8ed5952a28235b28be/memoire1.png',
        medium: 'https://cele-immo-sandbox.s3.eu-west-2.amazonaws.com/admin%40gmail.com/5dffde8ed5952a28235b28be/memoire1.png',
        big: 'https://cele-immo-sandbox.s3.eu-west-2.amazonaws.com/admin%40gmail.com/5dffde8ed5952a28235b28be/memoire1.png'
      }
    ];

  }

}
