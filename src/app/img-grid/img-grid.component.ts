import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';

import { UnsplashService } from '../unsplash.service';
import { ThrowStmt } from '@angular/compiler';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: ['./img-grid.component.css']
})
export class ImgGridComponent implements OnInit, OnChanges {

  @Input() query: any;
  // @Input() orientation: any;

  results: []; // Array of results images
  active: number; // Index of currently expanded image, if any
  expanded: boolean; // Expanded image view toggle
  dlimit = 60;
  routeParams: any;
  orientation: string = "portrait";
  data: any;
  limit: number = 20;
  page: any = 1;
  totalPages: number;

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

  constructor(
    private unsplashService: UnsplashService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.query) { this.query = changes.query.currentValue; }
    // if (changes.orientation) { this.orientation = changes.orientation.currentValue; }
    this.getImages();
  }

  ngOnInit() {
    this.setQuery();
  }

  setQuery() {
    this.routeParams = this.activatedRoute.params.subscribe(params => {
      this.query = params['query']; // (+) converts string 'id' to a number
      console.log('****query****', params);
      this.getImages();
    });
  }

  getImages() {
    const q = {
      client_id: 'a454fbcbca7b2231415a8de80c764c3c61198d3be3871e4e9cb1c2e9f6a5c422',
      query: this.query,
      per_page: this.limit,
      page: this.page,
      orientation: this.orientation || 'portrait'
    };
    this.unsplashService.search_images(q).toPromise().then(data => {
      console.log('===> ' + this.query, data);
      this.results = data.results;
      this.data = data;
      // this.totalPages = this.limit / data.total;
    });
  }

  setOrientation(o: string) {
    this.orientation = o;
    this.getImages();
  }

  next() {
    if (this.active < this.results.length - 1) {
      this.active++;
    } else if (this.results.length !== 0) {
      this.active = 0;
    }
  }

  prev() {
    if (this.active === 0) {
      this.active = this.results.length - 1;
    } else {
      this.active--;
    }
  }

  prevPage() {
    this.page -= 1;
    this.getImages();
    window.scrollTo(0, 0);
  }

  nextPage() {
    this.page += 1;
    this.getImages();
    window.scrollTo(0, 0);
  }

  download(url) {
    if(url !== 'download') {
      console.log('download', url);
      window.open(url, '_blank');
    }
  }

  closeExpandedView() {
    this.expanded = false;
  }
}
