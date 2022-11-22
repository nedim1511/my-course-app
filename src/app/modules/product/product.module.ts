import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ProductComponent} from "./product.component";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {SharedModule} from "../shared/shared.module";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductStateModule} from "../../state/product-state.module";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    SharedModule,
    ProductRoutingModule,
    ProductStateModule
  ],
  exports: [],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule {}
