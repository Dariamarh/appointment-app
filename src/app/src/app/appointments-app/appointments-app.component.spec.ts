import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsApp } from './appointments-app.component';

describe('AppointmentsApp', () => {
  let component: AppointmentsApp;
  let fixture: ComponentFixture<AppointmentsApp>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsApp]
    });
    fixture = TestBed.createComponent(AppointmentsApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
