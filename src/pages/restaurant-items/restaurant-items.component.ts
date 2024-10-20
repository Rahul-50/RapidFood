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
  hotelsName: any[] = [
    { Name: 'Pizza', restoName: 'Dominos Pizza' },
    { Name: 'Pizza', restoName: 'Pizza Hut' },
    { Name: 'Pizza', restoName: 'KINGS BAKES' },
    { Name: 'Burger', restoName: 'McDonalds' },
    { Name: 'Burger', restoName: 'Burger King' },
    { Name: 'Burger', restoName: 'Fat Burger' },
    { Name: 'Sandwich', restoName: 'Subway' },
    { Name: 'Sandwich', restoName: 'Quiznos' },
    { Name: 'Dosa', restoName: 'Dosa Plaza' },
    { Name: 'Paneer', restoName: 'Paneer Paradise' },
    { Name: 'Chicken', restoName: 'KFC' },
    { Name: 'Rice', restoName: 'Rice Bowl' },
    { Name: 'Cake', restoName: 'Cake Corner' },
    { Name: 'North Indian', restoName: 'Punjabi Kitchen' },
    { Name: 'Samosa', restoName: 'Samosa Junction' },
    { Name: 'Biryani', restoName: 'Biryani Express' },
    { Name: 'Noodles', restoName: 'Noodle House' },
    { Name: 'Maggie', restoName: 'Maggie Point' },
    { Name: 'Pasta', restoName: 'Pasta Palace' },
    { Name: 'Pasta', restoName: 'Pasta Point' },
  ];



  ngOnInit() {
    debugger;
    this.foodName = this.dataservice.senddata;
    this.foodimgurl = this.dataservice.imgurl
    debugger;
    // this.routes.paramMap.subscribe(params => {
    //   this.foodName = params.get('name');
    //   console.log(this.foodName);
    //   debugger;
    this.matchingRestaurants = this.hotelsName.filter((hotel: { Name: string; }) => hotel.Name.toLowerCase() === this.foodName?.toLowerCase());
    // });
  }

  onselectItem(item: any) {
    debugger;
    this.dataservice.restoName = item;
    this.route.navigateByUrl('create-order');
  }
}
