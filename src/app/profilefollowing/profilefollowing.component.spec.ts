import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilefollowingComponent } from './profilefollowing.component';

describe('ProfilefollowingComponent', () => {
  let component: ProfilefollowingComponent;
  let fixture: ComponentFixture<ProfilefollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilefollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilefollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
