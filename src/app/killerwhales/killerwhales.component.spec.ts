import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillerwhalesComponent } from './killerwhales.component';

describe('KillerwhalesComponent', () => {
  let component: KillerwhalesComponent;
  let fixture: ComponentFixture<KillerwhalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillerwhalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillerwhalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
