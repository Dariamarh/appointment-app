import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../models/appointment-model';

@Component({
  selector: 'appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsList implements OnInit {
  @Input() appointments!: Appointment[]
  @Output() removeAppointment = new EventEmitter<string | number>()


  ngOnInit(): void {

  }
  onRemoveAppointment(event: number | string) {
    this.removeAppointment.emit(event)
}

}
