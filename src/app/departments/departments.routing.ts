import { RouterModule, Routes } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { DepartmentsComponent } from "./departments.component";
import { AddDepartmentComponent } from "./add-department/add-department.component";
import { EditDepartmentComponent } from "./edit-department/edit-department.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
     {
        path:  '',
        component: DepartmentsComponent,
        children:[
            {
                path:  'department-list',
                component: DepartmentListComponent
              },
            {
                path:  'add-department',
                component: AddDepartmentComponent
              },
            {
                path:  'edit-department',
                component: EditDepartmentComponent
              },
        ],
      },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class DepartmantsRoutingModule{}