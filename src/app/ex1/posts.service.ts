import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getUserPosts(url: string, userId: number) {
    return new Promise(resolve => {
      this.http.get(url + '/' + userId).subscribe((res:any) => {
        let posts = res.map((x:any) => x.body);
        resolve(posts);
      });
    });
  }
}
