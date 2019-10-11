import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantResponsableComponent } from './consultant-responsable.component';

describe('ConsultantResponsableComponent', () => {
  let component: ConsultantResponsableComponent;
  let fixture: ComponentFixture<ConsultantResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
