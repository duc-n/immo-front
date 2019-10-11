import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsFinancieresComponent } from './conditions-financieres.component';

describe('ConditionsFinancieresComponent', () => {
  let component: ConditionsFinancieresComponent;
  let fixture: ComponentFixture<ConditionsFinancieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsFinancieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsFinancieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
