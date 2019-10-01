import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Posts} from './modules/post';
@Injectable({
  providedIn: 'root'
})
export class ServerserviceService {
  private url="https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }
  getdata():Observable<Posts[]>{
return this.http.get<Posts[]>(this.url);
  }
}
