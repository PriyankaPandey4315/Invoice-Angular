import { RouterModule, Routes } from "@angular/router";
import { UiElementsComponent } from "./ui-elements.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { AvatarsComponent } from "./avatars/avatars.component";
import { BadgesComponent } from "./badges/badges.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ButtonGroupComponent } from "./button-group/button-group.component";
import { CardsComponent } from "./cards/cards.component";
import { AdvancedCardsComponent } from "./advanced-cards/advanced-cards.component";
import { DropdownsComponent } from "./dropdowns/dropdowns.component";
import { ListItemsComponent } from "./list-items/list-items.component";
import { ProgressBarsComponent } from "./progress-bars/progress-bars.component";
import { PlaceholdersComponent } from "./placeholders/placeholders.component";
import { SpinnersComponent } from "./spinners/spinners.component";
import { NgModule } from "@angular/core";

const routes: Routes=[
    {
        path:  '',
        component: UiElementsComponent,
        children:[
            {
                path:  'alerts',
                component: AlertsComponent
              },
            {
                path:  'avatars',
                component: AvatarsComponent
              },
            {
                path:  'badges',
                component: BadgesComponent
              },
            {
                path:  'buttons',
                component: ButtonsComponent
              },
            {
                path:  'button-group',
                component: ButtonGroupComponent
              },
            {
                path:  'cards',
                component: CardsComponent
              },
            {
                path:  'advanced-cards',
                component: AdvancedCardsComponent
              },
              {
                path:  'dropdowns',
                component: DropdownsComponent
              },
            {
                path:  'list-items',
                component: ListItemsComponent
              },
            {
                path:  'progress-bars',
                component: ProgressBarsComponent
              },
            {
                path:  'placeholders',
                component: PlaceholdersComponent
              },
            {
                path:  'spinners',
                component: SpinnersComponent
              },
        ],
      },
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class UiElementsRoutingModule{}