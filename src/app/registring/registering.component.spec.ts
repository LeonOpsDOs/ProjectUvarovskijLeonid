import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteringComponent } from './registering.component';

describe('RegistringComponent', () => {
  let component: RegisteringComponent;
  let fixture: ComponentFixture<RegisteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
