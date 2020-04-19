import { Injectable } from '@angular/core';
import { Product } from './products';
import { PRODUCTS } from './listaProductos';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]>{
     return  of (PRODUCTS)
  }


  
  deleteProduct(Product:Product)
  { 
    var index = PRODUCTS.indexOf(Product)
    PRODUCTS.splice(index, 1);
     console.log(PRODUCTS);
  }
}
