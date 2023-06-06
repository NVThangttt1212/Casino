import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('showMore') showMore!: ElementRef;
  @ViewChild('showLess') showLess!: ElementRef;
  @ViewChild('img') img!: ElementRef;
  @ViewChild('showText') showText!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;

  constructor( private elementRef: ElementRef ) {}
  ngAfterViewInit(): void {
    const sliderTexts = this.elementRef.nativeElement.querySelectorAll('.slider__text--item')
    sliderTexts.forEach((slilderText:ElementRef )=>{
      
    })
  }

  // handle show more slider
  public test1(){
    if(this.showMore && this.showLess && this.showText) {
    this.showMore.nativeElement.style.display = 'none';
    this.showLess.nativeElement.style.display = 'block';
    this.img.nativeElement.style.display = 'none';
    this.showText.nativeElement.style.height = '100%';
    }
  }

  public test2(){
    if(this.showMore && this.showLess && this.showText) {
      this.showMore.nativeElement.style.display = 'block';
      this.showLess.nativeElement.style.display = 'none';
      this.img.nativeElement.style.display = 'block';
      this.showText.nativeElement.style.height = '96px';
      }
  }
 
  ngOnInit(): void {
    
  }
  
  tabs = [
    { name: 'Recommended', count: 342, content: '1 lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating... We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating...' },
    { name: 'Big Brands', count: 132, content: '2 Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating ipsum dolor sit amet, We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating 2 Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating ipsum dolor sit amet, We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating consectetur adipisicing elit.. consectetur adipisicing elit...' },
    { name: 'Newly Opened', count: 193, content: '3 Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae dolor et exercitationem expedita illo molestiae necessitatibus neque, nihil nostrum porro quia quidem reiciendis sed sequi suscipit veniam veritatis...' },
    { name: 'All', count: 1982, content: '4 Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation ratingLorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation ratingLorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation ratingLorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating Lorem We\'ve thoroughly reviewed Wazamba Casino and gave it a good reputation rating ' }
  ];

  activeTab = 0;
  onTabClick(index: number) {
    this.activeTab = index;
  }
 

}
