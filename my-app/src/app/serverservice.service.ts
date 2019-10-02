import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Posts} from './modules/post';
@Injectable({
  providedIn: 'root'
})
export class ServerserviceService {
  private url="http://localhost:3000/allposts"
  private onepost="http://localhost:3000/onepost/"

  constructor(private http:HttpClient) { }
  getallposts():Observable<Posts[]>{
return this.http.get<Posts[]>(this.url);
  }

  getonepost(id):Observable<Posts[]>{
    return this.http.get<Posts[]>(this.onepost+id);
      }
}
