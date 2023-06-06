import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ApiRanksService} from "./shared/servics/api-ranks.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private share: ApiRanksService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean | UrlTree {

    if (!this.share.checkSignIn) {
      this.showSuccess('vui lòng đăng nhập!')
      setTimeout(() => {
        this.router.navigate(['/sigin']);

      }, 2000); // Chờ 3 giây trước khi chuyển hướng
      return false

    } else {
      return true;
    }
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success'] // Custom CSS class for success message styling
    });
  }


}
