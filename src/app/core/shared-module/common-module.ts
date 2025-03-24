import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from '@angular/material/menu';
import { FullCalendarModule } from '@fullcalendar/angular'; 



export const SharedModule = [CommonModule,
    MatSidenavModule,
    MatListModule, 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule,
    FullCalendarModule]