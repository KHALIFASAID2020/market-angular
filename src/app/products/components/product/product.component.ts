import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
@Input() data!:Product;

@Output() item = new EventEmitter();
addButton:boolean = false;
quantity:number = 0
  ngOnInit(): void {

  }

  add(){
    this.item.emit({item:this.data, quantity:this.quantity})
  }
}
