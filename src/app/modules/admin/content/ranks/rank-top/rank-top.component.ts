import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ApiRanksService } from "../../../../../shared/servics/api-ranks.service";
import { ApiRank } from "../../../../../shared/types";
import {SharedServiceService} from "../../../../../shared-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rank-top',
  templateUrl: './rank-top.component.html',
  styleUrls: ['./rank-top.component.scss']
})
export class RankTopComponent implements OnInit, AfterViewInit {
  @ViewChild('widthrank') widthrank!: ElementRef;

  activeDL = 0;
  showDetails: boolean[] = [true];
  ishandleDetail: boolean[] = [true];
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private apiRanks: ApiRanksService,
    private shareService: SharedServiceService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getData();
  }

  dataRanks?: ApiRank[];
  getData() {
    this.apiRanks.getData().subscribe(
      (response: any) => {
        this.dataRanks = response;
      },
      (error) => {
      }
    );
  }


  ngAfterViewInit(): void {
    const rankingListItems = this.elementRef.nativeElement.querySelectorAll('.rank__item--info');
    const index = 3;
    const test = this.widthrank.nativeElement.offsetWidth;
    if (test < 400) {
      if (rankingListItems.length > index) {
        rankingListItems[index].style.display = 'none';
      }
    }
  }

  public toggleDetail(index: number): void {
    this.activeDL = index;
    this.showDetails[index] = !this.showDetails[index];
    this.ishandleDetail[index] = !this.ishandleDetail[index];
  }

  // HANDLE ROUTER

}
