import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAcquereurComponent } from './detail-acquereur.component';

describe('DetailAcquereurComponent', () => {
  let component: DetailAcquereurComponent;
  let fixture: ComponentFixture<DetailAcquereurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAcquereurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAcquereurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
