import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherBienResultComponent } from './rechercher-bien-result.component';

describe('RechercherBienResultComponent', () => {
  let component: RechercherBienResultComponent;
  let fixture: ComponentFixture<RechercherBienResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherBienResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherBienResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
