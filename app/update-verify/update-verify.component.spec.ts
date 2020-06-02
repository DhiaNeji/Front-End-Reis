import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVerifyComponent } from './update-verify.component';

describe('UpdateVerifyComponent', () => {
  let component: UpdateVerifyComponent;
  let fixture: ComponentFixture<UpdateVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
