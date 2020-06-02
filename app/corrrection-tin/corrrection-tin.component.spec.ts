import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrrectionTinComponent } from './corrrection-tin.component';

describe('CorrrectionTinComponent', () => {
  let component: CorrrectionTinComponent;
  let fixture: ComponentFixture<CorrrectionTinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrrectionTinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrrectionTinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
