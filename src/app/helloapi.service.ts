import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloapiService {

  helloapi_url = 'http://localhost:3600/';

  constructor(private http: HttpClient) {
  }

  hello_get(path: string) {
    return this.http.get<any>(this.helloapi_url + path);
  }
}
