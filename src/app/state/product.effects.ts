import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../services/product.service";
import {getProductsAction, getProductsFail, getProductsSuccess} from "./product.actions";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {
  }

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsAction),
    switchMap((action) => {
      return this.productService.getProducts().pipe(
        map((response) => getProductsSuccess({ response })),
        catchError((error) => of(getProductsFail({ error: error.toString() })))
      )
    })
  ))
}
