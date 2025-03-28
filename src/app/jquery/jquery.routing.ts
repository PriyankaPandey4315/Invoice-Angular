import { RouterModule, Routes } from "@angular/router";
import { AccordionsComponent } from "../jquery/accordions/accordions.component";
import { CarouselComponent } from "../jquery/carousel/carousel.component";
import { ModalsComponent } from "../jquery/modals/modals.component";
import { PopoversComponent } from "../jquery/popovers/popovers.component";
import { TabsComponent } from "../jquery/tabs/tabs.component";
import { TooltipsComponent } from "../jquery/tooltips/tooltips.component";
import { NgModule } from "@angular/core";
import { JqueryComponent } from "./jquery.component";

const routes: Routes=[
     {
        path:  '',
        component: JqueryComponent,
        children:[
            {
                path:  'accordions',
                component: AccordionsComponent
              },
            {
                path:  'carousel',
                component: CarouselComponent
              },
            {
                path:  'modals',
                component: ModalsComponent
              },
            {
                path:  'popovers',
                component: PopoversComponent
              },
            {
                path:  'tabs',
                component: TabsComponent
              },
            {
                path:  'tooltips',
                component: TooltipsComponent
              },
        ],
      },
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class JqueryRoutingModule{}