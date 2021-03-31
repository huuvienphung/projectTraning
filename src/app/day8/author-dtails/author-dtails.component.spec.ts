import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDtailsComponent } from './author-dtails.component';

describe('AuthorDtailsComponent', () => {
  let component: AuthorDtailsComponent;
  let fixture: ComponentFixture<AuthorDtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDtailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
