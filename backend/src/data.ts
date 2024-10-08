import bcrypt from "bcryptjs";
import { User } from "./models/userModel";
import { Product } from "./models/productModel";

export const sampleProducts: Product[] = [
  {
    name: "Nike Slim Shirt",
    slug: "nike-slim-shirt",
    category: "Shirts",
    image: "../images/p1.png",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "high quality shirt",
  },
  {
    name: "Adidas Fit Shirt",
    slug: "adidas-fit-shirt",
    category: "Shirts",
    image: "../images/p2.jpg",
    price: 100,
    countInStock: 20,
    brand: "Adidas",
    rating: 4.0,
    numReviews: 10,
    description: "high quality product",
  },
  {
    name: "Puma Free Pants",
    slug: "puma-free-pants",
    category: "Pants",
    image: "../images/p3.jpg",
    price: 220,
    countInStock: 0,
    brand: "Puma",
    rating: 4.8,
    numReviews: 17,
    description: "high quality product",
  },
  {
    name: "Nike Slim Pant",
    slug: "nike-slim-pant",
    category: "Pants",
    image: "../images/p4.jpg",
    price: 78,
    countInStock: 15,
    brand: "Nike",
    rating: 4.5,
    numReviews: 14,
    description: "high quality product",
  },
  {
    name: "Under Armour Sweatshirt",
    slug: "under-armour-sweatshirt",
    category: "Sweatshirts",
    image: "../images/p5.jpg",
    price: 150,
    countInStock: 8,
    brand: "Under Armour",
    rating: 4.6,
    numReviews: 12,
    description: "comfortable and warm",
  },
  {
    name: "Reebok Sports Shoes",
    slug: "reebok-sports-shoes",
    category: "Shoes",
    image: "../images/p6.jpg",
    price: 200,
    countInStock: 30,
    brand: "Reebok",
    rating: 4.7,
    numReviews: 22,
    description: "high performance sports shoes",
  },
  {
    name: "Adidas Running Shoes",
    slug: "adidas-running-shoes",
    category: "Shoes",
    image: "../images/p7.jpg",
    price: 180,
    countInStock: 25,
    brand: "Adidas",
    rating: 4.3,
    numReviews: 15,
    description: "lightweight and durable",
  },
  {
    name: "Nike Training Pants",
    slug: "nike-training-pants",
    category: "Pants",
    image: "../images/p8.jpg",
    price: 90,
    countInStock: 10,
    brand: "Nike",
    rating: 4.4,
    numReviews: 18,
    description: "flexible and comfortable",
  },
  {
    name: "Puma Jacket",
    slug: "puma-jacket",
    category: "Jackets",
    image: "../images/p9.jpg",
    price: 220,
    countInStock: 5,
    brand: "Puma",
    rating: 4.9,
    numReviews: 9,
    description: "stylish and warm jacket",
  },
  {
    name: "New Balance T-Shirt",
    slug: "new-balance-t-shirt",
    category: "Shirts",
    image: "../images/p10.jpg",
    price: 50,
    countInStock: 40,
    brand: "New Balance",
    rating: 4.1,
    numReviews: 11,
    description: "casual and comfortable",
  },
  {
    name: "Levi's Jeans",
    slug: "levis-jeans",
    category: "Jeans",
    image: "../images/p11.jpg",
    price: 70,
    countInStock: 25,
    brand: "Levi's",
    rating: 4.3,
    numReviews: 14,
    description: "durable and stylish jeans",
  },
  {
    name: "Columbia Hiking Boots",
    slug: "columbia-hiking-boots",
    category: "Boots",
    image: "../images/p12.jpg",
    price: 130,
    countInStock: 12,
    brand: "Columbia",
    rating: 4.8,
    numReviews: 20,
    description: "sturdy and comfortable",
  },
  {
    name: "Under Armour Shorts",
    slug: "under-armour-shorts",
    category: "Shorts",
    image: "../images/p13.jpg",
    price: 40,
    countInStock: 35,
    brand: "Under Armour",
    rating: 4.2,
    numReviews: 8,
    description: "lightweight and breathable",
  },
  {
    name: "The North Face Jacket",
    slug: "north-face-jacket",
    category: "Jackets",
    image: "../images/p14.jpg",
    price: 240,
    countInStock: 7,
    brand: "The North Face",
    rating: 4.9,
    numReviews: 15,
    description: "high quality and durable",
  },
  {
    name: "Adidas Tracksuit",
    slug: "adidas-tracksuit",
    category: "Tracksuits",
    image: "../images/p15.jpg",
    price: 150,
    countInStock: 22,
    brand: "Adidas",
    rating: 4.5,
    numReviews: 13,
    description: "comfortable and stylish",
  },
  {
    name: "Nike Running Shorts",
    slug: "nike-running-shorts",
    category: "Shorts",
    image: "../images/p16.jpg",
    price: 35,
    countInStock: 50,
    brand: "Nike",
    rating: 4.3,
    numReviews: 9,
    description: "lightweight and flexible",
  },
  {
    name: "Puma Hoodie",
    slug: "puma-hoodie",
    category: "Hoodies",
    image: "../images/p17.jpg",
    price: 60,
    countInStock: 18,
    brand: "Puma",
    rating: 4.4,
    numReviews: 16,
    description: "comfortable and warm",
  },
  {
    name: "Reebok Fitness Gloves",
    slug: "reebok-fitness-gloves",
    category: "Accessories",
    image: "../images/p18.jpg",
    price: 25,
    countInStock: 100,
    brand: "Reebok",
    rating: 4.2,
    numReviews: 25,
    description: "durable and comfortable",
  },
  {
    name: "Under Armour Backpack",
    slug: "under-armour-backpack",
    category: "Accessories",
    image: "../images/p19.jpg",
    price: 80,
    countInStock: 15,
    brand: "Under Armour",
    rating: 4.7,
    numReviews: 20,
    description: "spacious and durable",
  },
  {
    name: "Adidas Cap",
    slug: "adidas-cap",
    category: "Accessories",
    image: "../images/p20.jpg",
    price: 20,
    countInStock: 60,
    brand: "Adidas",
    rating: 4.1,
    numReviews: 12,
    description: "stylish and comfortable",
  },
];

export const sampleUsers: User[] = [
  {
    name: "Joe",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
