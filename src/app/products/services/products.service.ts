import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "../../../environment/environment";
import * as ts from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getAllProducts(){
    return this.http.get(`${Environment.apiUrl}/products`)
  }

  getAllCategories(){
    return this.http.get(`${Environment.apiUrl}/products/categories`)
  }

  getProductsByCategory(keyword:string){
    return this.http.get(`${Environment.apiUrl}/products/category/`+keyword)
  }

  getProductById(id : any){
    return this.http.get(`${Environment.apiUrl}/products/`+id)
  }
}
