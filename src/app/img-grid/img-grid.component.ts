import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';

import { UnsplashService } from '../unsplash.service';
import { ThrowStmt } from '@angular/compiler';
import { NgIf } from '@angular/common';

@Component({
  selector: 'img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: ['./img-grid.component.css']
})
export class ImgGridComponent implements OnInit, OnChanges {

  @Input() query: any;
  
  results: []; // Array of results images
  active: number; // Index of currently expanded image, if any
  expanded: boolean; // Expanded image view toggle
  dlimit = 60;

  @HostListener('document:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { // Escape
      this.closeExpandedView();
    } else if (event.keyCode === 37) { // Left
      this.prev();
    } else if (event.keyCode === 39) { // Right
      this.next();
    }
  }

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

  next() {
    if (this.active < this.results.length) {
      this.active++;
    } else if (this.results.length !== 0) {
      //this.active = this.results[0];
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
