import { Component, inject } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {

  dataservice = inject(DataService);
  foodtype: any;

  addedItems: any[] = [];
  totalPrice: number = 0;
  restaurant: any;
  matchingRestaurants: any[] = [];
  hotelsName: any[] = [
    {
      Name: 'Pizza',
      restoName: 'Dominos Pizza',
      address: '333 Fat Street, Central Park',
      types: [
        { type: 'Margherita', price: 250, imgurl: 'https://b.zmtcdn.com/data/dish_photos/21a/010b29da595df93d828ca0dca935821a.jpg' },
        { type: 'Pepperoni', price: 350, imgurl: 'https://b.zmtcdn.com/data/dish_photos/e84/7850b115687ee8594f9d7f0a66c2ee84.jpg' },
        { type: 'Veggie Supreme', price: 300 }
      ]
    },
    {
      Name: 'Pizza',
      restoName: 'Pizza Hut',
      address: '123 Pizza Street, City Center',
      types: [
        { type: 'Cheese Lovers', price: 270 },
        { type: 'BBQ Chicken', price: 380 },
        { type: 'Spicy Veggie', price: 290 }
      ]
    },
    {
      Name: 'Pizza',
      restoName: 'KINGS BAKES',
      address: '456 Hut Avenue, Downtown',
      types: [
        { type: 'Four Cheese', price: 320 },
        { type: 'Mushroom Delight', price: 280 },
        { type: 'Meat Feast', price: 400 }
      ]
    },
    {
      Name: 'Burger',
      restoName: 'McDonalds',
      address: '789 King Street, West Side',
      types: [
        { type: 'Big Mac', price: 150 },
        { type: 'McChicken', price: 120 },
        { type: 'Cheeseburger', price: 100 }
      ]
    },
    {
      Name: 'Burger',
      restoName: 'Burger King',
      address: '111 Fast Food Lane, Uptown',
      types: [
        { type: 'Whopper', price: 180 },
        { type: 'Chicken Royale', price: 160 },
        { type: 'Veggie Burger', price: 140 }
      ]
    },
    {
      Name: 'Burger',
      restoName: 'Fat Burger',
      address: '222 Burger Boulevard, Suburbs',
      types: [
        { type: 'Classic Fatburger', price: 200 },
        { type: 'Double Cheeseburger', price: 250 },
        { type: 'Veggie Fatburger', price: 220 }
      ]
    },
    {
      Name: 'Pasta',
      restoName: 'Pasta Palace',
      address: '333 Fat Street, Central Park',
      types: [
        { type: 'Spaghetti Bolognese', price: 350 },
        { type: 'Penne Alfredo', price: 300 },
        { type: 'Lasagna', price: 400 }
      ]
    },
    {
      Name: 'Pasta',
      restoName: 'Pasta Point',
      address: '444 Pasta Avenue, Riverside',
      types: [
        { type: 'Carbonara', price: 330 },
        { type: 'Pesto Pasta', price: 320 },
        { type: 'Arrabbiata', price: 280 }
      ]
    }
  ];



  ngOnInit() {
    debugger;
    this.foodtype = this.dataservice.restoName;
    // this.foodtype = 'Pizza';
    this.matchingRestaurants = this.hotelsName.filter((hotel: { restoName: string; }) =>
      hotel.restoName.toLowerCase() === this.foodtype?.toLowerCase()
    );

    // console.log('Matching Restaurants:', this.matchingRestaurants);
  }

  onadditem(item: any) {
    if (this.addedItems.length < 5) {
      this.addedItems.push({ name: item.type, price: item.price });
      this.calculateTotal();
    }else{
      alert('You can add only 5 items 😊')
    }

  }

  removeItem(index: number) {
    alert('You want to Remove order 😎');

    this.addedItems.splice(index, 1); // Remove the item at the given index
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.addedItems.reduce((sum, item) => sum + item.price, 0);
  }

  onplaceorder(){
    debugger;

    alert('You want to place order 😎');
    alert('Your order is placed !');

  }
}
