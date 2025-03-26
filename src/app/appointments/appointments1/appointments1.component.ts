import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../core/shared-module/common-module';
import {  Router, RouterModule } from '@angular/router';
import { Calendar } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';



@Component({
  selector: 'app-appointments1',
  imports:[SharedModule, RouterModule],
  templateUrl: './appointments1.component.html',
  styleUrls: ['./appointments1.component.css']
})
export class Appointments1Component implements AfterViewInit {
  @ViewChild('appointmentsCal') calendarEl!: ElementRef;

  ngAfterViewInit() {
    const calendar = new Calendar(this.calendarEl.nativeElement, {
      plugins: [dayGridPlugin],
      headerToolbar: {
        left: "prevYear,prev,next,nextYear today",
        center: "title",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      },
      initialDate: "2024-05-10",
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      events: [
        { title: "5 Appointments", url: "/appointments/appointments-list", start: "2024-05-01", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "9 Appointments", url: "/appointments/appointments-list", start: "2024-05-02", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "12 Appointments", url: "/appointments/appointments-list", start: "2024-05-03", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "9 Appointments", url: "/appointments/appointments-list", start: "2024-05-04", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "7 Appointments", url: "/appointments/appointments-list", start: "2024-05-05", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "16 Appointments", url: "/appointments/appointments-list", start: "2024-05-06", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "9 Appointments", url: "/appointments/appointments-list", start: "2024-05-07", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "13 Appointments", url: "/appointments/appointments-list", start: "2024-05-08", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "20 Appointments", url: "/appointments/appointments-list", start: "2024-05-09", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
        { title: "11 Appointments", url: "/appointments/appointments-list", start: "2024-05-10", textColor: "#116aef", color: "#ffffff", borderColor: "#469ED8" },
      ],
    });

    calendar.render();
  }
}