import { NgModule } from "@angular/core";
import { UiElementsRoutingModule } from "./ui-elements.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[UiElementsRoutingModule,
        CommonModule
    ]
})
export class UiElementsModule{}