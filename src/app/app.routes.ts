import {  Routes } from '@angular/router';
import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';
import { MedicalDashboardComponent } from './medical-dashboard/medical-dashboard.component';
import { DentistDashboardComponent } from './dentist-dashboard/dentist-dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
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
import { DoctorsDashboardComponent } from './doctors/doctors-dashboard/doctors-dashboard.component';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { DoctorsProfileComponent } from './doctors/doctors-profile/doctors-profile.component';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctors/edit-doctor/edit-doctor.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { PatientsDashboardComponent } from './patients/patients-dashboard/patients-dashboard.component';
import { EditPatientsDetailsComponent } from './patients/edit-patients-details/edit-patients-details.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { EditStaffDetailComponent } from './staff/edit-staff-detail/edit-staff-detail.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { Appointments1Component } from './appointments/appointments1/appointments1.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { BookAppointmentComponent } from './appointments/book-appointment/book-appointment.component';
import { EditAppointmentComponent } from './appointments/edit-appointment/edit-appointment.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { HrApprovalsComponent } from './human-resources/hr-approvals/hr-approvals.component';
import { AttendanceComponent } from './human-resources/attendance/attendance.component';
import { StaffLeavesComponent } from './human-resources/staff-leaves/staff-leaves.component';
import { HolidaysComponent } from './human-resources/holidays/holidays.component';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { AccountsComponent } from './accounts/accounts.component';
import { IncomeComponent } from './accounts/income/income.component';
import { PaymentComponent } from './accounts/payment/payment.component';
import { InvoicesComponent } from './accounts/invoices/invoices.component';
import { InvoiceDetailComponent } from './accounts/invoice-detail/invoice-detail.component';
import { CreateInvoiceComponent } from './accounts/create-invoice/create-invoice.component';
import { ExpensesComponent } from './accounts/expenses/expenses.component';
import { SalariesComponent } from './salaries/salaries.component';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { SalaryListComponent } from './salaries/salary-list/salary-list.component';
import { PayslipComponent } from './salaries/payslip/payslip.component';
import { RoomsComponent } from './rooms/rooms.component';
import { StatisticsComponent } from './rooms/statistics/statistics.component';
import { RoomsAllotedComponent } from './rooms/rooms-alloted/rooms-alloted.component';
import { RoomsByDepartmentComponent } from './rooms/rooms-by-department/rooms-by-department.component';
import { AvailableRoomsComponent } from './rooms/available-rooms/available-rooms.component';
import { BookRoomComponent } from './rooms/book-room/book-room.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { EditRoomComponent } from './rooms/edit-room/edit-room.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { AmbulanceListComponent } from './ambulance/ambulance-list/ambulance-list.component';
import { AddAmbulanceComponent } from './ambulance/add-ambulance/add-ambulance.component';
import { EditAmbulanceComponent } from './ambulance/edit-ambulance/edit-ambulance.component';
import { AmbulanceCallListComponent } from './ambulance/ambulance-call-list/ambulance-call-list.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { AlertsComponent } from './ui-elements/alerts/alerts.component';
import { AvatarsComponent } from './ui-elements/avatars/avatars.component';
import { BadgesComponent } from './ui-elements/badges/badges.component';
import { ButtonGroupComponent } from './ui-elements/button-group/button-group.component';
import { CardsComponent } from './ui-elements/cards/cards.component';
import { AdvancedCardsComponent } from './ui-elements/advanced-cards/advanced-cards.component';
import { DropdownsComponent } from './ui-elements/dropdowns/dropdowns.component';
import { ListItemsComponent } from './ui-elements/list-items/list-items.component';
import { ProgressBarsComponent } from './ui-elements/progress-bars/progress-bars.component';
import { PlaceholdersComponent } from './ui-elements/placeholders/placeholders.component';
import { SpinnersComponent } from './ui-elements/spinners/spinners.component';
import { JqueryComponentsComponent } from './jquery-components/jquery-components.component';
import { AccordionsComponent } from './jquery-components/accordions/accordions.component';
import { CarouselComponent } from './jquery-components/carousel/carousel.component';
import { ModalsComponent } from './jquery-components/modals/modals.component';
import { PopoversComponent } from './jquery-components/popovers/popovers.component';
import { TabsComponent } from './jquery-components/tabs/tabs.component';
import { TooltipsComponent } from './jquery-components/tooltips/tooltips.component';
import { FormsComponent } from './forms/forms.component';
import { FormInputsComponent } from './forms/form-inputs/form-inputs.component';
import { CheckboxRadioComponent } from './forms/checkbox-radio/checkbox-radio.component';
import { FileInputComponent } from './forms/file-input/file-input.component';
import { DatetimePickersComponent } from './forms/datetime-pickers/datetime-pickers.component';
import { InputMasksComponent } from './forms/input-masks/input-masks.component';
import { InputTagsComponent } from './forms/input-tags/input-tags.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ApexGraphsComponent } from './graphs/apex-graphs/apex-graphs.component';
import { MorrisGraphsComponent } from './graphs/morris-graphs/morris-graphs.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoginComponent } from './login-signup/login/login.component';
import { SignupComponent } from './login-signup/signup/signup.component';
import { ForgotPasswordComponent } from './login-signup/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-signup/reset-password/reset-password.component';
import { MenuLevelComponent } from './menu-level/menu-level.component';
import { LevelOneLinkComponent } from './menu-level/level-one-link/level-one-link.component';
import { LevelOneMenuComponent } from './menu-level/level-one-menu/level-one-menu.component';
import { LevelTwoLinkComponent } from './menu-level/level-one-menu/level-two-link/level-two-link.component';
import { LevelTwoMenuComponent } from './menu-level/level-one-menu/level-two-menu/level-two-menu.component';
import { LevelThreeLinkComponent } from './menu-level/level-one-menu/level-two-menu/level-three-link/level-three-link.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { DoctorsCardsComponent } from './doctors/doctors-cards/doctors-cards.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';

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
    component: DoctorsComponent,
    children: [
      
        {
            path:'doctors-dashboard', 
            component: DoctorsDashboardComponent
        },
        {
            path:'doctors-list', 
            component: DoctorsListComponent
        },
        {
          path:'doctors-cards', 
          component: DoctorsCardsComponent
      },
        {
            path:'doctors-profile', 
            component: DoctorsProfileComponent
        },
        {
            path:'add-doctor', 
            component: AddDoctorComponent
        },
        {
            path:'edit-doctor', 
            component: EditDoctorComponent
        },

    ],
  },
  {
    path:'patients',
    component: PatientsComponent,
    children:[
        {
            path:'patients-dashboard', 
            component: PatientsDashboardComponent
        },
        {
            path:'patients-list', 
            component: PatientsListComponent
        },
        {
            path:'add-patients', 
            component: AddPatientsComponent
        },
        {
            path:'edit-patients-details', 
            component: EditPatientsDetailsComponent
        },
    ],
  },

  {
    path:  'staff',
    component: StaffComponent,
    children:[
        {
            path:'staff-list',
            component:StaffListComponent
        },
        {
            path:'add-staff',
            component:AddStaffComponent
        },
        {
            path:'edit-staff-detail',
            component:EditStaffDetailComponent
        },
    ],
  },
  {
    path:  'appointments',
    component: AppointmentsComponent,
    children:[
        {
            path:'appointments1',
            component:Appointments1Component
        },
        {
            path:'appointments-list',
            component:AppointmentsListComponent
        },
        {
            path:'book-appointment',
            component:BookAppointmentComponent
        },
        {
            path:'edit-appointment',
            component:EditAppointmentComponent
        },
    ],
  },
  {
    path:  'departments',
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
  {
    path:  'accounts',
    component: AccountsComponent,
    children:[
        {
            path:  'income',
            component: IncomeComponent
          },
        {
            path:  'payment',
            component: PaymentComponent
          },
        {
            path:  'invoices',
            component: InvoicesComponent
          },
        {
            path:  'invoice-detail',
            component: InvoiceDetailComponent
          },
        {
            path:  'create-invoice',
            component: CreateInvoiceComponent
          },
        {
            path:  'expenses',
            component: ExpensesComponent
          },
    ],
  },
  {
    path:  'human-resources',
    component: HumanResourcesComponent,
    children:[
        {
            path:  'hr-approvals',
            component: HrApprovalsComponent
          },
        {
            path:  'attendance',
            component: AttendanceComponent
          },
        {
            path:  'staff-leaves',
            component: StaffLeavesComponent
          },
        {
            path:  'holidays',
            component: HolidaysComponent
          },
    ],
  },
  {
    path:  'salaries',
    component: SalariesComponent,
    children:[
        {
            path:  'salary-list',
            component: SalaryListComponent
          },
          {
            path:  'payslip',
            component: PayslipComponent
          },
    ],
  },
  {
    path:  'rooms',
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
  {
    path:  'ambulance',
    component: AmbulanceComponent,
    children:[
        {
            path:  'ambulance-list',
            component: AmbulanceListComponent
          },
          {
            path:  'add-ambulance',
            component: AddAmbulanceComponent
          },
        {
            path:  'edit-ambulance',
            component: EditAmbulanceComponent
          },
          {
            path:  'ambulance-call-list',
            component: AmbulanceCallListComponent
          },
    ],
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
  {
    path:  'jquery-components',
    component: JqueryComponentsComponent,
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
  {
    path:  'forms',
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
  {
    path:  'tables',
    component: TablesComponent
  },
  {
    path:  'graphs',
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
    path:  'login-signup',
    component: LoginSignupComponent,
    children:[
        {
            path:  'login',
            component: LoginComponent
          },
          {
            path:  'signup',
            component: SignupComponent
          },
        {
            path:  'forgot-password',
            component: ForgotPasswordComponent
          },
          {
            path:  'reset-password',
            component: ResetPasswordComponent
          },
    ],
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

