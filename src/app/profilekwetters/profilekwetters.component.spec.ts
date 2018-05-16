import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilekwettersComponent } from './profilekwetters.component';

describe('ProfilekwettersComponent', () => {
  let component: ProfilekwettersComponent;
  let fixture: ComponentFixture<ProfilekwettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilekwettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilekwettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
