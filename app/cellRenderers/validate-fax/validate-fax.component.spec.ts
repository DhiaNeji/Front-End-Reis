import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateFaxComponent } from './validate-fax.component';

describe('ValidateFaxComponent', () => {
  let component: ValidateFaxComponent;
  let fixture: ComponentFixture<ValidateFaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateFaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateFaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
