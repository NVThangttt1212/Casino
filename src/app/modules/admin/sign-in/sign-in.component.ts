import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiRanksService} from "../../../shared/servics/api-ranks.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private router: Router,
    private share: ApiRanksService,
    private snackBar: MatSnackBar,
  ) { }


  ngOnInit(): void {

  }
  usePattern = /^[a-zA-Z0-9_]{3,20}$/;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  userInfo = {
    username: '',
    password: '',
    rememberMe: false,
  };

  onSubmit(form: NgForm): void {

    const userName = form.value.username;
    const password = form.value.password;
    if (userName === "admin123" && password == "admin@"){
        this.share.checkSignIn = true;
        this.showSuccess('Đăng nhập thành công!')
        setTimeout(()=>{
          this.router.navigate(['/rank'])

        },1000)
    }else {
        this.share.checkSignIn = false;
      alert('tài khoản mật khẩu không chính xác!')
    }
  }
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success'] // Custom CSS class for success message styling
    });
  }

}
