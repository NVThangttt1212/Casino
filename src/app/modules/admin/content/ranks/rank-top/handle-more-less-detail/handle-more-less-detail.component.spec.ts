import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleMoreLessDetailComponent } from './handle-more-less-detail.component';

describe('HandleMoreLessDetailComponent', () => {
  let component: HandleMoreLessDetailComponent;
  let fixture: ComponentFixture<HandleMoreLessDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleMoreLessDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleMoreLessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
