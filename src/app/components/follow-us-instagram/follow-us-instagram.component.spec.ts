import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUsInstagramComponent } from './follow-us-instagram.component';

describe('FollowUsInstagramComponent', () => {
  let component: FollowUsInstagramComponent;
  let fixture: ComponentFixture<FollowUsInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUsInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUsInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
