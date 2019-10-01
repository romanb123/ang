import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AllpostsComponent} from './allposts/allposts.component';
import {OnepostComponent} from './onepost/onepost.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'posts',component:AllpostsComponent},
  {path:'posts/:id',component:OnepostComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AllpostsComponent,
  HomeComponent,OnepostComponent]

