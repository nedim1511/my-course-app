import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.interface";
import {Store} from "@ngrx/store";
import {getProducts} from "../../state/product.selectors";
import {getProductsAction} from "../../state/product.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products$: Observable<Product[]> | undefined;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getProductsAction());
    this.products$ = this.store.select(getProducts);
  }

}
