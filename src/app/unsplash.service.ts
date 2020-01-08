import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  unsplash_api = 'https://api.unsplash.com/';

  constructor(private http: HttpClient) {
  }

  search_images(options) {
    return this.http.get<any>(this.unsplash_api + '/search/photos', {params: options});
  }

  //ramin: trying to get random image to put as background
  // get_random(){
  //   const q = {
  //     client_id: 'a454fbcbca7b2231415a8de80c764c3c61198d3be3871e4e9cb1c2e9f6a5c422',
  //   };
  //   return this.http.get<any>(this.unsplash_api + '/photos/random', {params: q});
  // }
}
