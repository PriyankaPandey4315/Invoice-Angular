import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from "./forms.component";
import { FormInputsComponent } from "./form-inputs/form-inputs.component";
import { CheckboxRadioComponent } from "./checkbox-radio/checkbox-radio.component";
import { FileInputComponent } from "./file-input/file-input.component";
import { ValidationsComponent } from "./validations/validations.component";
import { DatetimePickersComponent } from "./datetime-pickers/datetime-pickers.component";
import { InputMasksComponent } from "./input-masks/input-masks.component";
import { InputTagsComponent } from "./input-tags/input-tags.component";
import { NgModule } from "@angular/core";

const routes: Routes=[
     {
        path:  '',
        component: FormsComponent,
        children:[
            {
                path:  'form-inputs',
                component: FormInputsComponent
              },
            {
                path:  'checkbox-radio',
                component: CheckboxRadioComponent
              },
            {
                path:  'file-input',
                component: FileInputComponent
              },
            {
                path:  'validations',
                component: ValidationsComponent
              },
            {
                path:  'datetime-pickers',
                component: DatetimePickersComponent
              },
            {
                path:  'input-masks',
                component: InputMasksComponent
              },
              {
                path:  'input-tags',
                component: InputTagsComponent
              },
        ],
      },
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FormsRoutingModule{}