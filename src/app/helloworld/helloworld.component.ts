import { Component, OnInit, HostListener } from '@angular/core';
import { HelloapiService } from '../helloapi.service';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  data: any = "aadsfasf";

  constructor(private helloapiService: HelloapiService) {
    this.getData();
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
  }

  ngOnInit() {
    console.log(this.helloapiService);
  }

  getData() {
    this.helloapiService.hello_get('bird').toPromise().then(data => {
      console.log('===> ', data);
      this.data = data;
    });
  }

}
