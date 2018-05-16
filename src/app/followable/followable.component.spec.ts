import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowableComponent } from './followable.component';

describe('FollowableComponent', () => {
  let component: FollowableComponent;
  let fixture: ComponentFixture<FollowableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
