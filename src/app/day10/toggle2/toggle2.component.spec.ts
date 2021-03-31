import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggle2Component } from './toggle2.component';

describe('Toggle2Component', () => {
  let component: Toggle2Component;
  let fixture: ComponentFixture<Toggle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Toggle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Toggle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
