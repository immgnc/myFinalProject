import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritationComponent } from './authoritation.component';

describe('AuthoritationComponent', () => {
  let component: AuthoritationComponent;
  let fixture: ComponentFixture<AuthoritationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthoritationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoritationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
