import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  imports: [ 
    
    FullCalendarModule,
    AppComponent, // ✅ Import standalone component directly
    BrowserModule,
  ],
  exports: []
})
export class AppModule {}
