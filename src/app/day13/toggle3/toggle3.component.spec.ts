import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggle3Component } from './toggle3.component';

describe('Toggle3Component', () => {
  let component: Toggle3Component;
  let fixture: ComponentFixture<Toggle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Toggle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Toggle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
