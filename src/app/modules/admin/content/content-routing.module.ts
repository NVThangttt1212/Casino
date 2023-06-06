import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RankTopComponent} from "./ranks/rank-top/rank-top.component";
import {FormRfComponent} from "./form-rf/form-rf.component";
import {SignInComponent} from "../sign-in/sign-in.component";

import {UserGuard} from "../../../user.guard";

const routes: Routes = [
  // { path: 'rank', component: RankTopComponent, canActivate:[UserGuard]},
  { path: '', component: RankTopComponent},
  { path: 'rank', component: RankTopComponent},
  { path: 'formRf/:id', component: FormRfComponent , canActivate:[UserGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
