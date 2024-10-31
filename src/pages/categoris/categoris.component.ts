import { Route, Router, Routes } from '@angular/router';
import { routes } from './../../app/app.routes';
import { NgFor } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-categoris',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categoris.component.html',
  styleUrl: './categoris.component.css'
})
export class CategorisComponent {
  dataservice = inject(DataService);
  categories: any;

  constructor(private routes: Router) {

    this.categories = this.dataservice.categories
  }


  onadditem(item: any) {
    debugger;
    this.dataservice.senddata = item.name;
    this.dataservice.imgurl = item.imgUrl;
    this.routes.navigateByUrl('/restaurant-items');
    debugger;
  }
}
