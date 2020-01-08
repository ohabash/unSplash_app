import { Component, OnInit, Input } from '@angular/core';
import { UnsplashService } from '../unsplash.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: ['./img-grid.component.css']
})
export class ImgGridComponent implements OnInit {

  @Input() query: any;

  results: []; // Array of results images
  active: number; // Index of currently expanded image, if any
  expanded: boolean; // Expanded image view toggle

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

  next() {
    if (this.active < this.results.length) {
      this.active++;
    } else if (this.results.length !== 0) {
      //this.active = this.results[0]; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    }
  }

  prev() {
    if (this.active === 0) {
      this.active = this.results.length - 1;
    } else {
      this.active--;
    }
  }

  closeExpandedView() {
    this.expanded = false;
  }
}
