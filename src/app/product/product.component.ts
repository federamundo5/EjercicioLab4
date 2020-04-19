import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../productservice.service';
import { Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductsService) {}

 products;
 dataSource;
  ngOnInit(): void {
    this.getProducts();
    this.dataSource = this.getProducts();
  }


  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  deleteProduct(ProductoBorrar:Product): void{
     this.productService.deleteProduct(ProductoBorrar);
  }


  
}

