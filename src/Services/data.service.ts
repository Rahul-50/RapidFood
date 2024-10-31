import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  senddata: any;
  imgurl: any;

  userobj: any = {
    userdata: '',
    Email: '',
    password: '',
    Confirmpassword: ''
  }
  restoName: any;
  constructor() { }
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

  // hotelsName: any[] = [
  //   { Name: 'Pizza', restoName: 'Dominos Pizza' },
  //   { Name: 'Pizza', restoName: 'Pizza Hut' },
  //   { Name: 'Pizza', restoName: 'KINGS BAKES' },
  //   { Name: 'Burger', restoName: 'McDonalds' },
  //   { Name: 'Burger', restoName: 'Burger King' },
  //   { Name: 'Burger', restoName: 'Fat Burger' },
  //   { Name: 'Sandwich', restoName: 'Subway' },
  //   { Name: 'Sandwich', restoName: 'Quiznos' },
  //   { Name: 'Dosa', restoName: 'Dosa Plaza' },
  //   { Name: 'Paneer', restoName: 'Paneer Paradise' },
  //   { Name: 'Chicken', restoName: 'KFC' },
  //   { Name: 'Rice', restoName: 'Rice Bowl' },
  //   { Name: 'Cake', restoName: 'Cake Corner' },
  //   { Name: 'North Indian', restoName: 'Punjabi Kitchen' },
  //   { Name: 'Samosa', restoName: 'Samosa Junction' },
  //   { Name: 'Biryani', restoName: 'Biryani Express' },
  //   { Name: 'Noodles', restoName: 'Noodle House' },
  //   { Name: 'Maggie', restoName: 'Maggie Point' },
  //   { Name: 'Pasta', restoName: 'Pasta Palace' },
  //   { Name: 'Pasta', restoName: 'Pasta Point' },
  // ];

  hotelsName: any[] = [
    {
      Name: 'Pizza',
      restoName: 'Dominos Pizza',
      address: '333 Fat Street, Central Park',
      types: [
        { type: 'Margherita', price: 250, imgurl: 'https://b.zmtcdn.com/data/dish_photos/21a/010b29da595df93d828ca0dca935821a.jpg' },
        { type: 'Pepperoni', price: 350, imgurl: 'https://b.zmtcdn.com/data/dish_photos/e84/7850b115687ee8594f9d7f0a66c2ee84.jpg' },
        { type: 'Veggie Supreme', price: 300, imgurl: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' }
      ]
    },
    {
      Name: 'Sandwich',
      restoName: 'Subway',
      address: '555 Sub Street, High Square',
      types: [
        { type: 'Veggie Delight', price: 120, imgurl: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png' },
        { type: 'Chicken Teriyaki', price: 200, imgurl: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png' },
        { type: 'Italian BMT', price: 180, imgurl: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png' }
      ]
    },
    {
      Name: 'Dosa',
      restoName: 'Dosa Corner',
      address: '666 South Street, Downtown',
      types: [
        { type: 'Plain Dosa', price: 80, imgurl: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png' },
        { type: 'Masala Dosa', price: 100, imgurl: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png' },
        { type: 'Cheese Dosa', price: 150, imgurl: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png' }
      ]
    },
    {
      Name: 'Paneer',
      restoName: 'Paneer Palace',
      address: '777 Cheese Lane, East Side',
      types: [
        { type: 'Paneer Tikka', price: 220, imgurl: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png' },
        { type: 'Paneer Butter Masala', price: 250, imgurl: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png' },
        { type: 'Kadai Paneer', price: 240, imgurl: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png' }
      ]
    },
    {
      Name: 'Chicken',
      restoName: 'Chicken House',
      address: '888 Meat Street, North End',
      types: [
        { type: 'Grilled Chicken', price: 300, imgurl: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
        { type: 'Butter Chicken', price: 350, imgurl: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
        { type: 'Chicken Curry', price: 320, imgurl: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' }
      ]
    },
    {
      Name: 'Rice',
      restoName: 'Rice Bowl',
      address: '999 Grain Road, West Town',
      types: [
        { type: 'Steamed Rice', price: 50, imgurl: 'https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg' },
        { type: 'Fried Rice', price: 120, imgurl: 'https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg' },
        { type: 'Jeera Rice', price: 100, imgurl: 'https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg' }
      ]
    },
    {
      Name: 'Momos',
      restoName: 'Momo Magic',
      address: '101 Momo Alley, Food Court',
      types: [
        { type: 'Veg Momos', price: 80, imgurl: 'https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png' },
        { type: 'Chicken Momos', price: 120, imgurl: 'https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png' },
        { type: 'Paneer Momos', price: 100, imgurl: 'https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png' }
      ]
    },
    {
      Name: 'Cake',
      restoName: 'Cake Factory',
      address: '202 Sweet Avenue, City Center',
      types: [
        { type: 'Chocolate Cake', price: 250, imgurl: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' },
        { type: 'Vanilla Cake', price: 220, imgurl: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' },
        { type: 'Red Velvet', price: 300, imgurl: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' }
      ]
    },
    {
      Name: 'North Indian',
      restoName: 'North Delight',
      address: '303 Spicy Street, Central Market',
      types: [
        { type: 'Dal Makhani', price: 180, imgurl: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg' },
        { type: 'Paneer Butter Masala', price: 240, imgurl: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg' },
        { type: 'Butter Naan', price: 50, imgurl: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg' }
      ]
    },
    {
      Name: 'Samosa',
      restoName: 'Samosa Junction',
      address: '404 Street Food Plaza, Uptown',
      types: [
        { type: 'Veg Samosa', price: 20, imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnVgCV-6sbWMQ-OaALcEztviIakZJgzo5Jg&s' },
        { type: 'Paneer Samosa', price: 30, imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnVgCV-6sbWMQ-OaALcEztviIakZJgzo5Jg&s' },
        { type: 'Chicken Samosa', price: 35, imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnVgCV-6sbWMQ-OaALcEztviIakZJgzo5Jg&s' }
      ]
    },
    {
      Name: 'Biryani',
      restoName: 'Biryani House',
      address: '505 Rice Road, West Side',
      types: [
        { type: 'Chicken Biryani', price: 180, imgurl: 'https://img.freepik.com/premium-psd/high-quality-mouth-watering-delicious-food-isolated-transparent-background_259071-6092.jpg' },
        { type: 'Mutton Biryani', price: 220, imgurl: 'https://img.freepik.com/premium-psd/high-quality-mouth-watering-delicious-food-isolated-transparent-background_259071-6092.jpg' },
        { type: 'Veg Biryani', price: 160, imgurl: 'https://img.freepik.com/premium-psd/high-quality-mouth-watering-delicious-food-isolated-transparent-background_259071-6092.jpg' }
      ]
    },
    {
      Name: 'Noodles',
      restoName: 'Noodle Nest',
      address: '606 Wok Street, Riverside',
      types: [
        { type: 'Hakka Noodles', price: 100, imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s' },
        { type: 'Schezwan Noodles', price: 120, imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s' },
        { type: 'Chowmein', price: 90, imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s' }
      ]
    },
    {
      Name: 'Maggie',
      restoName: 'Maggie Spot',
      address: '707 Snack Lane, Food District',
      types: [
        { type: 'Masala Maggie', price: 50, imgurl: 'https://www.shutterstock.com/image-photo/vegetable-maggi-recipe-tasty-veg-260nw-1597122580.jpg' },
        { type: 'Cheese Maggie', price: 70, imgurl: 'https://www.shutterstock.com/image-photo/vegetable-maggi-recipe-tasty-veg-260nw-1597122580.jpg' },
        { type: 'Spicy Maggie', price: 60, imgurl: 'https://www.shutterstock.com/image-photo/vegetable-maggi-recipe-tasty-veg-260nw-1597122580.jpg' }
      ]
    },
    {
      Name: 'Pasta',
      restoName: 'Pasta Heaven',
      address: '808 Italian Way, Riverside',
      types: [
        { type: 'Penne Arrabbiata', price: 280, imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg' },
        { type: 'Fettuccine Alfredo', price: 320, imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg' },
        { type: 'Mac and Cheese', price: 300, imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg' }
      ]
    },
    {
      Name: 'Pizza',
      restoName: 'Pizza Hut',
      address: '123 Pizza Street, City Center',
      types: [
        { type: 'Cheese Lovers', price: 270, imgurl: 'https://b.zmtcdn.com/data/dish_photos/21a/010b29da595df93d828ca0dca935821a.jpg' },
        { type: 'BBQ Chicken', price: 380, imgurl: 'https://b.zmtcdn.com/data/dish_photos/e84/7850b115687ee8594f9d7f0a66c2ee84.jpg' },
        { type: 'Spicy Veggie', price: 290, imgurl: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' }
      ]
    },
    {
      Name: 'Pizza',
      restoName: 'KINGS BAKES',
      address: '456 Hut Avenue, Downtown',
      types: [
        { type: 'Four Cheese', price: 320 , imgurl: 'https://b.zmtcdn.com/data/dish_photos/21a/010b29da595df93d828ca0dca935821a.jpg'},
        { type: 'Mushroom Delight', price: 280 , imgurl: 'https://b.zmtcdn.com/data/dish_photos/21a/010b29da595df93d828ca0dca935821a.jpg'},
        { type: 'Meat Feast', price: 400 , imgurl: 'https://b.zmtcdn.com/data/dish_photos/21a/010b29da595df93d828ca0dca935821a.jpg'}
      ]
    },
    {
      Name: 'Burger',
      restoName: 'McDonalds',
      address: '789 King Street, West Side',
      types: [
        { type: 'Big Mac', price: 150 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
        { type: 'McChicken', price: 120 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
        { type: 'Cheeseburger', price: 100 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' }
      ]
    },
    {
      Name: 'Burger',
      restoName: 'Burger King',
      address: '111 Fast Food Lane, Uptown',
      types: [
        { type: 'Whopper', price: 180 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
        { type: 'Chicken Royale', price: 160 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
        { type: 'Veggie Burger', price: 140 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' }
      ]
    },
    {
      Name: 'Burger',
      restoName: 'Fat Burger',
      address: '222 Burger Boulevard, Suburbs',
      types: [
        { type: 'Classic Fatburger', price: 200 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
        { type: 'Double Cheeseburger', price: 250 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
        { type: 'Veggie Fatburger', price: 220 , imgurl: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' }
      ]
    },
    {
      Name: 'Pasta',
      restoName: 'Pasta Palace',
      address: '333 Fat Street, Central Park',
      types: [
        { type: 'Spaghetti Bolognese', price: 350 , imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg'},
        { type: 'Penne Alfredo', price: 300 , imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg'},
        { type: 'Lasagna', price: 400 , imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg'}
      ]
    },
    {
      Name: 'Pasta',
      restoName: 'Pasta Point',
      address: '444 Pasta Avenue, Riverside',
      types: [
        { type: 'Carbonara', price: 330 , imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg'},
        { type: 'Pesto Pasta', price: 320 , imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg'},
        { type: 'Arrabbiata', price: 280 , imgurl: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg'}
      ]
    }
  ];
}
