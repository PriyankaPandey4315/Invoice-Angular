import { NgModule } from "@angular/core";
import { JqueryRoutingModule } from "./jquery.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
        JqueryRoutingModule,
        CommonModule
    ]
})
export class JqueryModule{}