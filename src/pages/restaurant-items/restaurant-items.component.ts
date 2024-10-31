import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './restaurant-items.component.html',
  styleUrl: './restaurant-items.component.css'
})
export class RestaurantItemsComponent implements OnInit {
  foodName: any;
  foodimgurl: any;
  dataservice = inject(DataService);
  route = inject(Router);
  matchingRestaurants: any[] = [];
  // Define your hotelsName array
  hotelsName: any;
  itemnotFound: any[] = [{
    'msg': 'This item is not available 😒'
  }];


  ngOnInit() {
    // debugger;
    this.hotelsName = this.dataservice.hotelsName;
    this.foodName = this.dataservice.senddata;
    this.foodimgurl = this.dataservice.imgurl
    // debugger;
    // this.routes.paramMap.subscribe(params => {
    //   this.foodName = params.get('name');
    //   console.log(this.foodName);
    //   debugger;
    this.matchingRestaurants = this.hotelsName.filter((hotel: { Name: string; }) => hotel.Name.toLowerCase() === this.foodName?.toLowerCase());
    // });
    //  this.matchingRestaurants = this.matchingRestaurants.length > 0 ? this.matchingRestaurants : this.itemnotFound;

  }

  onselectItem(item: any, url: any) {
    // debugger;
    this.dataservice.imgurl = url;
    this.dataservice.restoName = item;
    this.route.navigateByUrl('create-order');
  }
}
