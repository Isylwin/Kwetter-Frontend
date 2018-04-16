import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallprofileComponent } from './smallprofile.component';

describe('SmallprofileComponent', () => {
  let component: SmallprofileComponent;
  let fixture: ComponentFixture<SmallprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
