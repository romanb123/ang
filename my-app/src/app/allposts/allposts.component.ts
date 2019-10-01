import { Component, OnInit } from '@angular/core';
import {ServerserviceService} from '../serverservice.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {
public posts=[]
  constructor(private getdata:ServerserviceService ) { }

  ngOnInit() {
    this.getdata.getdata().subscribe(data => (this.posts = data ,console.log(this.posts)));
    
  }

}
