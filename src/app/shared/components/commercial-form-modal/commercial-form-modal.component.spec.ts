import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialFormModalComponent } from './commercial-form-modal.component';

describe('CommercialFormModalComponent', () => {
  let component: CommercialFormModalComponent;
  let fixture: ComponentFixture<CommercialFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
