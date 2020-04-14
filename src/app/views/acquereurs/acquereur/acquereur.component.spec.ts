import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquereurComponent } from './acquereur.component';

describe('AcquereurComponent', () => {
  let component: AcquereurComponent;
  let fixture: ComponentFixture<AcquereurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquereurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquereurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
