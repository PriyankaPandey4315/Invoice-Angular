import { RouterModule, Routes } from "@angular/router";
import { GraphsComponent } from "./graphs.component";
import { ApexGraphsComponent } from "./apex-graphs/apex-graphs.component";
import { MorrisGraphsComponent } from "./morris-graphs/morris-graphs.component";
import { NgModule } from "@angular/core";

const routes: Routes=[
     {
        path:  '',
        component: GraphsComponent,
        children:[
            {
                path:  'apex-graphs',
                component: ApexGraphsComponent
              },
              {
                path:  'morris-graphs',
                component: MorrisGraphsComponent
              },
        ],
      },
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class GraphsRoutingModule{}