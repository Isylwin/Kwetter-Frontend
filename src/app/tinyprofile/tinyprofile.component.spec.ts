import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyprofileComponent } from './tinyprofile.component';

describe('TinyprofileComponent', () => {
  let component: TinyprofileComponent;
  let fixture: ComponentFixture<TinyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
