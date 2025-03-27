import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../core/shared-module/common-module';
import {  Router, RouterModule } from '@angular/router';
import { Calendar } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';

import googleCalendarPlugin from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-holidays',
  imports: [ ],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css'
})
export class HolidaysComponent implements AfterViewInit{
  @ViewChild('googleView') calendarEl!: ElementRef;

  ngAfterViewInit() {
    const calendar = new Calendar(this.calendarEl.nativeElement, {
      plugins: [dayGridPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,listYear'
  },

  displayEventTime: false, // don't show the time column in list view

  // THIS KEY WON'T WORK IN PRODUCTION!!!
  // To make your own Google API key, follow the directions here:
  // http://fullcalendar.io/docs/google_calendar/
  googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

  // US Holidays
  events: 'en.usa#holiday@group.v.calendar.google.com',

  eventClick: function(arg) {
    // opens events in a popup window
    window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

    arg.jsEvent.preventDefault() // don't navigate in main tab
  },

});

calendar.render();
};
  
}
