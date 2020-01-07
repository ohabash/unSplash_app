import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UnsplashService } from '../unsplash.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: ['./img-grid.component.css']
})
export class ImgGridComponent implements OnInit, OnChanges {

  @Input() query: any;

  results: [];
  dlimit = 60;

  constructor(private unsplashService: UnsplashService) {
  }

  ngOnChanges(changes) {
    console.log(changes)
    this.query = changes.query.currentValue;
    this.getImages();
  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    //how to check if the query has any value here
    /*if(this.query)
    {*/
      console.log('searching for ', this.query)
      this.unsplashService.search_images(this.query).toPromise().then(data => {
        console.log('===> ' + this.query, data.results);
        this.results = data.results;
      });
    //}
  }

}
