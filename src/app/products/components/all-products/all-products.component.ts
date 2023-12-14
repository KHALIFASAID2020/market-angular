import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{

  products: Product[] = []
  categories: any[] = []
  loading:boolean = false
  cartProducts:any[] = [];
  constructor(private productsService : ProductsService){

  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getCategories(){
    this.loading = true;
    this.productsService.getAllCategories().subscribe((res:any)=>{
      this.loading = false;
      this.categories= res

    },err => {
      this.loading = false;
      alert('error api categories')
    })
  }


  getProducts(){
    this.loading = true;
    this.productsService.getAllProducts().subscribe((res:any)=>{
      this.loading = false;
      this.products= res
    },err => {
      this.loading = false;
      alert('error')
    })
  }

  filterCategory(event : any){
    let value = event.target.value;
    (value=="All") ? this.getProducts() : this.getProductsByCategory(value);
  }

  getProductsByCategory(value : string){
    this.loading = true;
    this.productsService.getProductsByCategory(value).subscribe((res:any)=>{
      this.loading = false;
      this.products= res
    },err => {
      this.loading = false;
      alert('error')
    })
  }


  addToCart(event : any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item=> item.item.id == event.item.id)
      if(exist){
        alert("Product is already in your cart")
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }
     
    }else{
      this.cartProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }
  }
}
