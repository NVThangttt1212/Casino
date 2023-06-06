import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { RankTopComponent } from "./ranks/rank-top/rank-top.component";
import { HandleMoreLessDetailComponent } from "./ranks/rank-top/handle-more-less-detail/handle-more-less-detail.component";
import { MatInputModule } from "@angular/material/input";
import { ContentComponent } from "./content.component";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatButtonModule} from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import { FooterModule} from "../footer/footer.module";
import { FormRfComponent} from "./form-rf/form-rf.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    HandleMoreLessDetailComponent,
    RankTopComponent,
    ContentComponent,
    FormRfComponent
  ],

  exports: [
    RankTopComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    FooterModule,
    MatSnackBarModule
  ]
})
export class ContentModule { }
