import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {productFeatureKey, productReducer} from "./product.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./product.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(productFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
})
export class ProductStateModule {}
