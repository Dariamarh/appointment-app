import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsApp } from './appointments-app/appointments-app.component';
import { AppointmentsList } from './appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsApp,
    AppointmentsList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
