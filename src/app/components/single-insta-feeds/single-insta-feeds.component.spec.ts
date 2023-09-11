import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInstaFeedsComponent } from './single-insta-feeds.component';

describe('SingleInstaFeedsComponent', () => {
  let component: SingleInstaFeedsComponent;
  let fixture: ComponentFixture<SingleInstaFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInstaFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInstaFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
