import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  unsplash_api = 'https://api.unsplash.com/';

  constructor(private http: HttpClient) {
  }

  search_images(qry: string) {
    const q = {
      client_id: 'a454fbcbca7b2231415a8de80c764c3c61198d3be3871e4e9cb1c2e9f6a5c422',
      query: qry,
      per_page: '20',
      page: '1',
      orientation: 'portrait'
    };
    return this.http.get<any>(this.unsplash_api + '/search/photos', {params: q});
  }
}
