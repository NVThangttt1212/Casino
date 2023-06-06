import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedServiceService } from './shared-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentModule} from "./modules/admin/content/content.module";
import { FooterModule } from "./modules/admin/footer/footer.module";
import { HeaderModule } from "./modules/admin/header/header.module";
import { SilderModule } from "./modules/admin/slider/silder.module";
import { ChanbgDirective } from './shared/directives/chanbg.directive';
import { MessComponent}  from "./modules/admin/mess/mess.component";
import {SignInModule} from "./modules/admin/sign-in/sign-in.module";


@NgModule({
  declarations: [
    AppComponent,
    ChanbgDirective,
    MessComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ContentModule,
    FooterModule,
    HeaderModule,
    SilderModule,
    SignInModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
