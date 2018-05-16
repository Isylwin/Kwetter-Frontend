import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilefollowersComponent } from './profilefollowers.component';

describe('ProfilefollowersComponent', () => {
  let component: ProfilefollowersComponent;
  let fixture: ComponentFixture<ProfilefollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilefollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilefollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
