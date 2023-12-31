import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
cartProducts:any[]=[]
total: any =0;
success:boolean = false
  ngOnInit(): void {
    this.getCartProducts();
    this.getCartTotal();
  }

constructor(private cartService : CartsService){

}

  getCartProducts() {
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart") || '[]');
    }
    console.log(this.cartProducts);
  }

  getCartTotal(){
    this.total = 0
    for(let x in this.cartProducts){
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity
    }
  }

  addQuantity(index:number) {
    this.cartProducts[index].quantity++
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }

  minsQuantity(index:number) {
    this.cartProducts[index].quantity--
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  detectChange(){
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }

  deleteProduct(index:number){
    this.cartProducts.splice(index,1)
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }

  clearCart(){
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    
  }

  addCart(){
    let products = this.cartProducts.map(item=> {
     return  {productId:item.item.id, quantity:item.quantity}
    })
    let Model = {
      userId : 5,
      date : new Date(),
      products: products
    }
    console.log(Model);

    this.cartService.createNewCart(Model).subscribe(res=>{
      this.success = true
      this.clearCart();
    })
    
  }

}
