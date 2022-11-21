import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
