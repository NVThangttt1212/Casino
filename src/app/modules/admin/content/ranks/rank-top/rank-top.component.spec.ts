import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTop1Component } from './rank-top.component';

describe('RankTop1Component', () => {
  let component: RankTop1Component;
  let fixture: ComponentFixture<RankTop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankTop1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankTop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
