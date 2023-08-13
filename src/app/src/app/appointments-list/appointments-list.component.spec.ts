import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsList } from './appointments-list.component';

describe('AppointmentsList', () => {
  let component: AppointmentsList;
  let fixture: ComponentFixture<AppointmentsList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsList]
    });
    fixture = TestBed.createComponent(AppointmentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
