import {createAction, props} from "@ngrx/store";
import {ProductResponse} from "../models/product.interface";

export const getProductsAction = createAction(
  '[Product Actions] Get Products'
);

export const getProductsSuccess = createAction(
  '[Product Actions] Get Products Success',
  props<{ response: ProductResponse }>()
);

export const getProductsFail = createAction(
  '[Product Actions] Get Products Fail',
  props<{ error: string }>()
);
