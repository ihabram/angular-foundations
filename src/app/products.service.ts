import { Injectable } from '@angular/core';
import {IProduct} from './product.model';
import products from "./products.json";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): IProduct[] {
    return products;
  }
}
