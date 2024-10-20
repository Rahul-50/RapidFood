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
  constructor(private routes: Router) { }
  categories = [
    { name: 'Pizza', imgUrl: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' },
    { name: 'Burger', imgUrl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
    { name: 'Sandwich', imgUrl: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png' },
    { name: 'Dosa', imgUrl: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png' },
    { name: 'Paneer', imgUrl: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png' },
    { name: 'Chicken', imgUrl: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
    { name: 'Rice', imgUrl: 'https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg' },
    { name: 'Momos', imgUrl: 'https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png' },
    { name: 'Cake', imgUrl: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' },
    { name: 'North Indian', imgUrl: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg' },
    { name: 'Samosa', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnVgCV-6sbWMQ-OaALcEztviIakZJgzo5Jg&s' },
    { name: 'Biryani', imgUrl: 'https://img.freepik.com/premium-psd/high-quality-mouth-watering-delicious-food-isolated-transparent-background_259071-6092.jpg' },
    { name: 'Noodles', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s' },
    { name: 'Maggie', imgUrl: 'https://www.shutterstock.com/image-photo/vegetable-maggi-recipe-tasty-veg-260nw-1597122580.jpg' },
    { name: 'Pasta', imgUrl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg' }
  ];


  onadditem(item: any) {
    debugger;
    this.dataservice.senddata = item.name;
    this.dataservice.imgurl = item.imgUrl;
    this.routes.navigateByUrl('/restaurant-items');
    debugger;
  }
}
