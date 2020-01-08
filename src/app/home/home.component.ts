import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: [];

  constructor(private unsplashService: UnsplashService) {
  }

  ngOnInit() {
    // this.randomImg();
  }

  // ramin: trying to get random image to put as background
  // randomImg(){
  //   this.unsplashService.get_random().toPromise().then(data => {
  //     console.log('===> ' +  data.result);
  //     this.result = data.results;
  //   });
  // }

}
