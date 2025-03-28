import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomsComponent } from "./rooms.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { RoomsAllotedComponent } from "./rooms-alloted/rooms-alloted.component";
import { RoomsByDepartmentComponent } from "./rooms-by-department/rooms-by-department.component";
import { AvailableRoomsComponent } from "./available-rooms/available-rooms.component";
import { BookRoomComponent } from "./book-room/book-room.component";
import { AddRoomComponent } from "./add-room/add-room.component";
import { EditRoomComponent } from "./edit-room/edit-room.component";



const routes: Routes = [
   {
       path:  '',
       component: RoomsComponent,
       children:[
           {
               path:  'statistics',
               component: StatisticsComponent
             },
           {
               path:  'rooms-alloted',
               component: RoomsAllotedComponent
             },
           {
               path:  'rooms-by-department',
               component: RoomsByDepartmentComponent
             },
           {
               path:  'available-rooms',
               component: AvailableRoomsComponent
             },
           {
               path:  'book-room',
               component: BookRoomComponent
             },
           {
               path:  'add-room',
               component: AddRoomComponent
             },
           {
               path:  'edit-room',
               component: EditRoomComponent
             },
       ],
     },
      
]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RoomsRouting {}
  