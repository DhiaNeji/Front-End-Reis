import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapesNettoyageComponent } from './etapes-nettoyage.component';

describe('EtapesNettoyageComponent', () => {
  let component: EtapesNettoyageComponent;
  let fixture: ComponentFixture<EtapesNettoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapesNettoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapesNettoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
