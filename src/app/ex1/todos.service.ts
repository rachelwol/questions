import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getUserTodos(url: string, userId: number) {
    return new Promise(resolve => {
      this.http.get(url + '/' + userId).subscribe((res:any)=>{
        debugger;
        let todos = res.map((x:any)=>x.title);
        resolve(todos);
      })
    });
  }
}
