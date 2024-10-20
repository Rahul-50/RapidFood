import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { CategorisComponent } from '../pages/categoris/categoris.component';
import { RestaurantItemsComponent } from '../pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from '../pages/create-order/create-order.component';
import { LayoutComponent } from '../pages/layout/layout.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'layout', component: LayoutComponent },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'restaurant-items', component: RestaurantItemsComponent },
      { path: 'foodcategory', component: CategorisComponent },
      { path: 'create-order', component: CreateOrderComponent }
    ]
  }

];
