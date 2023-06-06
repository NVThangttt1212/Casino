import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedServiceService } from '../../../shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @ViewChild('widthHeader', ) widthHeader!: ElementRef;

  constructor(private sharedService: SharedServiceService,
    private elementRef: ElementRef) {}


  ngAfterViewInit() {
    const hehe = this.widthHeader.nativeElement.offsetWidth
    if(hehe <= 820){
      const currentShowAsider = this.sharedService.getShowAsider();
      this.sharedService.setShowAsider(!currentShowAsider);
    }
  }

  onclickicon(){
    const widthHeader = this.elementRef.nativeElement.querySelector('.header');
    if(widthHeader.offsetWidth <= 820){
      this.sharedService.toggleAsider();

    }else{

    }


  }

  ngOnInit(): void {
  }

}
