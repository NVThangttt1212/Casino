import { AfterContentInit, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('main') main!: ElementRef;

  constructor(private sharedService: SharedServiceService,private elementRef: ElementRef) {}
  
  ngAfterViewInit() {
    if(this.container.nativeElement.offsetWidth > 820){
      this.overlay.nativeElement.style.display = 'none';
    }
  }

  //getter  không nhận tham số đầu vào và thường dùng để truy suất và trả về giá trị 
  get showAsider(): boolean {
    return this.sharedService.getShowAsider();
  }

  clickOverlay(): void {
    this.sharedService.setShowAsider(false);
  }

  clickImg(): void {
    if(this.container.nativeElement.offsetWidth <= 820){
      this.sharedService.setShowAsider(false);
    }
  }

  ngAfterContentInit(): void {
  }

  public activeTab = 0;
  // istoggle là mảng khi ta click nó sẽ cho các giá trị vào mảng 
  // nên ta có thể gán giá trị true hay false tương ứng với item nào muốn active
  istoggle:boolean[] = [true, false, false]

  public toggleSubMenu(index: number): void {
    this.istoggle[index] = !this.istoggle[index];
  }
  
  apiMenu = [
    { 
      actived: true,
      imgMenu: './assets/img/casino-add-chips.png',
      nameMenu: "Online Casinos",
      subMenu: [
        'Top online casinosst',
        'Newly opened casinos',
        'Big Brands',
        'All Casinos',
      ]
    },
    { actived: false,
      imgMenu: './assets/img/casino-diamond-bag-1.png',
      nameMenu: "Bonuses",
      subMenu: [
        'No Deposit Bonuses',
        'Deposit Bonuses',
        'Reload Bonuses',
        'Cashback Bonuses',
        'All Bonuses',  
      ]
    }
    ,{actived: false,
      imgMenu: './assets/img/board-game.png',
      nameMenu: "Games",
      subMenu: [
          'Slots',
          'Roulette',
          'Video poker',
          'Blackjack',
          'Scratch cards',
          'All Games', 
      ]
    },
  ]

}
