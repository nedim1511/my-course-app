import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      console.log('Http request is successful')
      console.log(products);
    }, (error) => {
      console.log('Http request is NOT successful')
      console.error(error);
    });
  }

}
