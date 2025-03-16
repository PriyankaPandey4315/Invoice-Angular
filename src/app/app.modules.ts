import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './core/shared-module/common-module';

@NgModule({
  imports: [ 
    SharedModule,
    AppComponent, // ✅ Import standalone component directly
    BrowserModule
  ],
  exports: []
})
export class AppModule {}
