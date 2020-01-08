import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  q: any;

  constructor(private router: Router) {

  }

  search() {
    this.go(`search/${this.q}`);
  }

  go(path) {
    this.router.navigate([path]);
  }
}
