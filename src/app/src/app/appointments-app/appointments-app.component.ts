import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment-model';

@Component({
  selector: 'appointments-app',
  templateUrl: './appointments-app.component.html',
  styleUrls: ['./appointments-app.component.scss']
})
export class AppointmentsApp implements OnInit {
  newStartTime = ''

  appointments: Appointment[] = [
    {
      id: this.makeId(),
      subject: "Meeting",
      starttime: '10:00',
      enddtime: '11:00',
      users: ['Harry', 'Haim'],

    },
    {
      id: this.makeId(),
      subject: "Contract",
      starttime: '11:00',
      enddtime: '14:00',
      users: ['Haim', 'David'],

    },
    {
      id: this.makeId(),
      subject: "Trip",
      starttime: '15:00',
      enddtime: '16:00',
      users: ['David', 'Nick'],
    },
  ]

  ngOnInit(): void {

  }

  onAddAppointment() {
    const newAppointment = {
      id: this.makeId(),
      subject: prompt("Subject"),
      starttime: prompt("Start time"),
      enddtime: prompt("End time"),
      users: ['Haim', 'David'],
    }
    if (newAppointment.starttime) {
      this.appointments.push(newAppointment)

    } else alert('You`ve already had an appointment ')
  }

  onRemoveAppointment(id: any) {
    this.appointments = this.appointments.filter(watcher => watcher.id !== id)
  }

  makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
  }
}
