import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { ApiRanksService } from "../../../../shared/servics/api-ranks.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import {ApiRank} from "../../../../shared/types";
import {catchError, Observable, switchMap, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-form-rf',
  templateUrl: './form-rf.component.html',
  styleUrls: ['./form-rf.component.scss']
})
export class FormRfComponent implements OnInit {
  FormRf!: FormGroup;

  constructor(private snackBar: MatSnackBar,
              private fb: FormBuilder,
              private router: ActivatedRoute,
              private apiServic: ApiRanksService,
              private route: Router,
              private el: ElementRef,
              private http: HttpClient,
  ) {
  }

  itemid!: number;
  // lấy dữ liệu ở api vào formrf
  rank: any;
  itemTop!: number;

  getidFromRf(): void {
    this.apiServic.getId(this.itemid as number).subscribe(rank => {
      this.rank = rank;
    });
  }
  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      this.itemid = +params['id'];
      this.itemTop = params['top']
      this.getidFromRf();

    });


    // custom validator basic
    const topValidator: ValidatorFn = (control: AbstractControl) => {
      const value: string = control.value;
      if (!value) {
        return {required: true};
      }
      if (!/^/.test(value)) {
        return {pattern: true};
      }
      return null;
    };

    this.FormRf = this.fb.group({
      id: [this.itemid],
      top:  ['# '+ [this.itemid]],
      colorNav: ['', [topValidator]],
      infoTop: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      infoTopMobi: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      imgnav: ['./assets/img/', [Validators.required, Validators.pattern(/^(?=.*\/).+$/)]],
      colorBorderPresent: ['', [Validators.required, Validators.pattern(/^#[a-zA-Z0-9]+$/)]],
      textPresent: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(120)]]
    });
  }

  private initialIdValue: any;
// thao tác trong form
  resetForm() {
    // Reset form
    this.FormRf.reset();
  }

  onsubmit() {
    if(this.FormRf.valid){
      const formData = this.FormRf.value;
      console.log('submit');
      this.apiServic
        .updateRank(formData)
        .subscribe( {
          next:()=> this.showSuccessMessage('bạn đã cập nhật thành công'),
          error:()=> this.showMessageErr('bạn đã cập nhật thất bại :((')
        });
    }else {
      this.showRequired('vui lòng nhập đầy đủ các trường')
    }
  }
  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success'] // Custom CSS class for success message styling
    });
  }
  showMessageErr(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Đặt thời gian hiển thị (ms)
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['err']
    });
  }

  showRequired(mes: string){
    this.snackBar.open(mes, 'close',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition:'top',
    })
  }


  noneOverlay() {
    const overlay = this.el.nativeElement.querySelector('.overlay');
    overlay.style.display = 'none';
    this.route.navigate(['/']);
    this
  }
}

