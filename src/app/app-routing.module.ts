import { NgModule } from '@angular/core';
import {  ContentComponent } from "./modules/admin/content/content.component";
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./modules/admin/sign-in/sign-in.component";

const routes: Routes = [
  { path: 'sigin', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
