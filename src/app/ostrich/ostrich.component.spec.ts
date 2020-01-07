import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstrichComponent } from './ostrich.component';

describe('OstrichComponent', () => {
  let component: OstrichComponent;
  let fixture: ComponentFixture<OstrichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstrichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstrichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
