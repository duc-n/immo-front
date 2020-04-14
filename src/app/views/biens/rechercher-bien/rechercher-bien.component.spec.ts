import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherBienComponent } from './rechercher-bien.component';

describe('RechercherBienComponent', () => {
  let component: RechercherBienComponent;
  let fixture: ComponentFixture<RechercherBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
