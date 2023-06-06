import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  @ViewChild('container') container!: ElementRef;
  public showAsider: boolean = true;

  toggleAsider() {

    this.showAsider = !this.showAsider;
  }

  getShowAsider(): boolean {
    return this.showAsider;
  }

  // tạo hàm và gán giá trị là value thì khi gọi hàm đó ra thì mới thay đổi được giá trị của getShowAsider
  setShowAsider(value: boolean): void {
    this.showAsider = value;
  }

  //handle showmore 18

}
