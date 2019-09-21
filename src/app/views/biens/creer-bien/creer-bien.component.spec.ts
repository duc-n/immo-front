import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerBienComponent } from './creer-bien.component';

describe('CreerBienComponent', () => {
  let component: CreerBienComponent;
  let fixture: ComponentFixture<CreerBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
