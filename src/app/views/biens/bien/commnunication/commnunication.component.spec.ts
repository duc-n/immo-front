import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommnunicationComponent } from './commnunication.component';

describe('CommnunicationComponent', () => {
  let component: CommnunicationComponent;
  let fixture: ComponentFixture<CommnunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommnunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommnunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
