import { Component, OnInit, Input } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: ['./img-grid.component.css']
})
export class ImgGridComponent implements OnInit {

  @Input() query: any;

  results: [];

  constructor(private unsplashService: UnsplashService) {
  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.unsplashService.search_images(this.query).toPromise().then(data => {
      console.log('===> ' + this.query, data.results);
      this.results = data.results;
    });
  }

}
