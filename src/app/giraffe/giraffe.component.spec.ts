import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiraffeComponent } from './giraffe.component';

describe('GiraffeComponent', () => {
  let component: GiraffeComponent;
  let fixture: ComponentFixture<GiraffeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiraffeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiraffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
