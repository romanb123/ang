import { Component, OnInit } from '@angular/core';
import {ServerserviceService} from '../serverservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  constructor(private onepost:ServerserviceService,private _route: ActivatedRoute) {}
singlepost:{}
  ngOnInit() {
    var id: number = this._route.snapshot.params["id"]
    this.onepost.getonepost(id).subscribe(data => (this.singlepost = data ,console.log(this.singlepost)));
  }

}
