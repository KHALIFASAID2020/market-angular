import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  createNewCart(model:any){
    return this.http.post(`${Environment.apiUrl}/carts/`,model)
  }
}
