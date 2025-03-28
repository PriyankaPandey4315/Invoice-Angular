import {  Routes } from '@angular/router';
import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';
import { MedicalDashboardComponent } from './medical-dashboard/medical-dashboard.component';
import { DentistDashboardComponent } from './dentist-dashboard/dentist-dashboard.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { TablesComponent } from './tables/tables.component';
import { VactorMapsComponent } from './vactor-maps/vactor-maps.component';
import { IconsComponent } from './icons/icons.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { TopographyComponent } from './topography/topography.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ExternalLinkComponent } from './external-link/external-link.component';
import { ChipComponent } from './chip/chip.component';
import { BadgeComponent } from './badge/badge.component';
import { DisabledLinkComponent } from './disabled-link/disabled-link.component';
import { MenuLevelComponent } from './menu-level/menu-level.component';
import { LevelOneLinkComponent } from './menu-level/level-one-link/level-one-link.component';
import { LevelOneMenuComponent } from './menu-level/level-one-menu/level-one-menu.component';
import { LevelTwoLinkComponent } from './menu-level/level-one-menu/level-two-link/level-two-link.component';
import { LevelTwoMenuComponent } from './menu-level/level-one-menu/level-two-menu/level-two-menu.component';
import { LevelThreeLinkComponent } from './menu-level/level-one-menu/level-two-menu/level-three-link/level-three-link.component';

export const routes: Routes = [
  {
    path:'',
    component: HospitalDashboardComponent
  },
  {
    path: 'hospital-dashboard',
    component: HospitalDashboardComponent
  },
  {
    path: 'medical-dashboard',
    component: MedicalDashboardComponent
  },
  {
    path: 'dentist-dashboard',
    component: DentistDashboardComponent
  },
  {
    path:  'doctors',
    loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule)
  },
  {
    path:'patients',
    loadChildren:() =>import('./patients/patients.modules').then(m => m.PatientsModule)
       
  },

  {
    path:  'staff',
   loadChildren:() => import('./staff/staff.modules').then(m => m.StaffModule)
  },
  {
    path:  'appointments',
    loadChildren:() =>  import('./appointments/appointments.modules').then(m => m.AppointmentsModule)
         
  },
  {
    path:  'departments',
    loadChildren:() => import('./departments/departments.modules').then(m =>m.DepartmentsModule)
  },
  {
    path:  'accounts',
     loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },

  {
    path:  'human-resources',
    loadChildren : () => import('./human-resources/human-resources.module').then(m =>m.HumanResourcesModule)
  },
  {
    path:  'salaries',
   loadChildren:() => import('./salaries/salaries.module').then(m => m.SalariesModule)
  },
  {
    path:  'rooms',
    loadChildren:() => import('./rooms/rooms.module').then(m => m.RoomsModule)
    },
  {
    path:  'ambulance',
    loadChildren:() => import('./ambulance/ambulance.module').then(m => m.AmbulanceModule)
  },
  {
    path:  'event-management',
    component: EventManagementComponent
  },
  {
    path:  'gallery',
    component: GalleryComponent
  },
  {
    path:  'news-updates',
    component: NewsUpdatesComponent
  },
  {
    path:  'ui-elements',
    loadChildren:() => import('./ui-elements/ui-elements.modules').then(m => m.UiElementsModule)
  },
  {
    path:  'jquery',
    loadChildren:() => import('./jquery/jquery.modules').then(m => m.JqueryModule)
  },
  {
    path:  'forms',
    loadChildren:() => import('./forms/forms.module').then(m => m.FormsModule)
  },
  {
    path:  'tables',
    component: TablesComponent
  },
  {
    path:  'graphs',
    loadChildren:() => import('./graphs/graphs.module').then(m => m.GraphsModule)
  },
  {
    path:  'vactor-maps',
    component: VactorMapsComponent
  },
  {
    path:  'icons',
    component: IconsComponent
  },
  {
    path:  'account-settings',
    component: AccountSettingsComponent
  },
  {
    path:  'topography',
    component: TopographyComponent
  },
  {

    path:'login-signup',
    loadChildren:() => import('./login-signup/loginsignup.module').then(m => m.LoginSignupModule)
  },
  {
    path:  'page-not-found',
    component: PagenotfoundComponent
  },
  {
    path:  'maintenance',
    component: MaintenanceComponent
  },
  {
    path:  'menu-level',
    component: MenuLevelComponent,
    children:[
        {
            path:  'one-link',
            component: LevelOneLinkComponent
          },
          {
            path:  'one-menu',
            component: LevelOneMenuComponent,
            children:[
                {
                    path:  'two-link',
                    component: LevelTwoLinkComponent
                  },
                  {
                    path:  'two-menu',
                    component: LevelTwoMenuComponent,
                    children:[
                        {
                            path:  'three-link',
                            component: LevelThreeLinkComponent
                          },
                    ],
                  },
            ],
          },
    ],
  },
  {
    path:  'external-link',
    component: ExternalLinkComponent
  },
  {
    path:  'chip',
    component: ChipComponent
  },
  {
    path:  'badge',
    component: BadgeComponent
  },
  {
    path:  'disabled-link',
    component: DisabledLinkComponent
  },
];

