import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import {HeaderComponent} from "./header.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        HeaderRoutingModule,
        MatButtonModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
