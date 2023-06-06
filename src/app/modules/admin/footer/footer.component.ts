import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  active = 0;
  public activeClick(index: number): void {
    this.active = index;
  }
  apiFoter = [
    'Contact Us',
    'About Us',
    'Privacy',
    'Terms',
    'Fair Gaming',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
