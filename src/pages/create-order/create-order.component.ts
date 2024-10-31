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
  itemnotFound: any[] = [{
    'msg': 'This item is not available 😒'
  }];
  totalPrice: number = 0;
  restaurant: any;
  matchingRestaurants: any[] = [];
  hotelsName =this.dataservice.hotelsName;



  ngOnInit() {
    debugger;
    this.foodtype = this.dataservice.restoName;
    // this.foodtype = 'Pizza';

    this.matchingRestaurants = this.hotelsName.filter((hotel: { restoName: string; }) =>
      hotel.restoName.toLowerCase() === this.foodtype?.toLowerCase()
    );
    // this.matchingRestaurants = this.matchingRestaurants.length > 0 ? this.matchingRestaurants : this.itemnotFound;

    console.log('Matching Restaurants:', this.matchingRestaurants);
  }

  onadditem(item: any) {
    if (this.dataservice.userobj.userdata == 'admin' && this.dataservice.userobj.password == 'admin') {
      if (this.addedItems.length < 5) {
        this.addedItems.push({ name: item.type, price: item.price });
        this.calculateTotal();
      } else {
        alert('You can add only 5 items 😊')
      }
    } else {
      alert('Please login')
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

  onplaceorder() {
    debugger;

    alert('You want to place order 😎');
    alert('Your order is placed !');

  }
}
