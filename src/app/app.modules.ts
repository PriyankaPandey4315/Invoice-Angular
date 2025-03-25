import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { QuillModule } from 'ngx-quill';


@NgModule({
  imports: [ 
    
    FullCalendarModule,
    AppComponent, // ✅ Import standalone component directly
    BrowserModule,
    QuillModule
  ],
  exports: []
})
export class AppModule {}
