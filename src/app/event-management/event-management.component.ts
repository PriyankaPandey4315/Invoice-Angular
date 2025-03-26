import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-event-management',
  imports: [FullCalendarModule],
  templateUrl: './event-management.component.html',
  styleUrl: './event-management.component.css'
})
export class EventManagementComponent  {

}
