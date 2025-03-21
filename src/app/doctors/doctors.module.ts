import { NgModule } from "@angular/core";
import { DoctorsRoutingModule } from "./doctors.routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
    
    ],
    imports: [
      CommonModule,
      DoctorsRoutingModule,
      RouterModule
    ]
  })
  export class DoctorsModule {}
  