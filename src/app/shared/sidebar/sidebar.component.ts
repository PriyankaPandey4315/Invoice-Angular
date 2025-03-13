import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatListModule  } from '@angular/material/list';
import { MatIconModule  } from '@angular/material/icon';
import { MatButtonModule  } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  imports:[MatSidenavModule, NgIf, NgFor,  MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SlidebarComponent {
opened= true;

  menuItems=[
    {icon:'ri-home-6-line', label: 'Hospital Dashboard', path: 'app/hostpital-dashboard', children: []},
    {icon:'ri-home-smile-2-line', label: 'Medical Dashboard', path: 'app/medical-dashboard', children: []},
    {icon:'ri-home-5-line', label: 'Dentist Dashboard', path: 'app/dentist-dashboard', children: []},
    {icon: 'ri-stethoscope-line', label: 'Doctors', path: 'app/doctors-dashboard', children: [
      {icon: '', label: 'Doctors Dashboard', path: 'doctors/doctors-dashboard'},
      {icon: '', label: 'Doctors List', path: 'doctors/doctors-list'},
      {icon: '', label: 'Doctors Cards', path: 'doctors/doctors-cards'},
      {icon: '', label: 'Doctors Profile', path: 'doctors/doctors-profile'},
      {icon: '', label: 'Add Doctor', path: 'doctors/add-doctor'},
      {icon: '', label: 'Edit Doctor', path: 'doctors/edit-doctor'},
    ]},
    {icon:'ri-heart-pulse-line', label: 'Patients', path: 'app/patients', children: [
      {icon: '', label: 'Patients Dashboard', path: 'patients/patients-dashboard'},
      {icon: '', label: 'Patients List', path: 'patients/patients-list'},
      {icon: '', label: 'Add Patients', path: 'patients/add-patients'},
      {icon: '', label: 'Edit Patient Details', path: 'patients/edit-patient-details'},
    ]},
    {icon:'ri-nurse-line', label: 'Staff', path: 'app/staff', children: [
      {icon: '', label: 'Staff Dashboard', path: 'staff/staff-dashboard'},
      {icon: '', label: 'Staff List', path: 'staff/staff-list'},
      {icon: '', label: 'Add Staff', path: 'staff/add-staff'},
    ]},
    {icon:'ri-dossier-line', label: 'Appointments', path: 'app/appointments', children: [
      {icon: '', label: 'Appointments Dashboard', path: 'appointments/appointments-dashboard'},
      {icon: '', label: 'Appointments List', path: 'appointments/appointments-list'},
      {icon: '', label: 'Book Appointment', path: 'appointments/book-appointment'},
      {icon: '', label: 'Edit Appointment', path: 'appointments/edit-appointment'},
     ]},
     {icon: 'ri-building-2-line', label: 'Departments', path: 'app/departments', children: [
      {icon: '', label: 'Departments List', path: 'departments/departments-list'},
      {icon: '', label: 'Add Department', path: 'departments/add-department'},
      {icon: '', label: 'Edit Department', path: 'departments/edit-department'},
     ]},
     {icon: 'ri-secure-payment-line', label:'Accounts', path: 'app/accounts', children: [
      {icon:'', label:'Income', path: 'accounts/income'},
      {icon:'', label:'Paymenys', path: 'accounts/payments'},
      {icon:'', label:'Invoices', path: 'accounts/invoices'},
      {icon:'', label:'Invoice Details', path: 'accounts/invoice-details'},
      {icon:'', label:'Create Invoice', path: 'accounts/create-invoice'},
      {icon:'', label:'Expenses', path: 'accounts/expenses'},
     ]},
     {icon:'ri-group-2-line', label:'Human Resources', path: 'app/human-resources', children: [
      {icon:'', label:'HR Approvals', path: 'human-resources/hr-approvals'},
      {icon:'', label:'Attendance', path: 'human-resources/attendance'},
      {icon:'', label:'Staff Leaves', path: 'human-resources/staff-leaves'},
      {icon:'', label:'Holidays', path: 'human-resources/holidays'},
     ]},
     {icon:'ri-money-dollar-circle-line', label:'Salaries', path: 'app/salaries', children: [
      {icon:'', label:'Salary List', path: 'salaries/salary-list'},
      {icon:'', label:'Payslip', path: 'salaries/payslip'},
     ]},
     {icon:'ri-hotel-bed-line', label:'Rooms', path:'app/rooms', children:[
      {icon:'', label:'Statistics', path:'rooms/statistics'},
      {icon:'', label:'Rooms Allotted', path:'rooms/romms-alloted'},
      {icon:'', label:'Rooms By Department', path:'rooms/rooms-by department'},
      {icon:'', label:'Availabel Rooms', path:'rooms/availabel-rooms'},
      {icon:'', label:'Book Room', path:'rooms/book-room'},
      {icon:'', label:'Add Room', path:'rooms/add-room'},
      {icon:'', label:'Edit Room', path:'rooms/edit-room'},
    ]},
    {icon:'ri-car-washing-line', label:'Ambulance', path:'rooms/ambulance', children:[
      {icon:'', label:'Ambulance List', path:'ambulance/ambulance-list'},
      {icon:'', label:'Add Ambulance', path:'ambulance/add-ambulance'},
      {icon:'', label:'Edit Ambulance', path:'ambulance/edit-ambulance'},
      {icon:'', label:'Ambulance Call List', path:'ambulance/ambulance-call-list'},
    ]},
    {icon:'ri-calendar-line', label:'Event Management', path:'app/event-management', children:[]},
    {icon:'ri-tent-line', label:'Gallery', path:'app/gallery', children:[]},
    {icon:'ri-news-line', label:'News & updates', path:'app/news-updates', children:[]},
    {icon:'ri-color-filter-line', label:'UI Elements', path:'app/ui-elements', children:[
      {icon:'', label:'Alterts', path:'ui-elements/alerts'},
      {icon:'', label:'Avatars', path:'ui-elements/avatars'},
      {icon:'', label:'Badges', path:'ui-elements/badges'},
      {icon:'', label:'Buttons', path:'ui-elements/buttons'},
      {icon:'', label:'Button Groups', path:'ui-elements/button-group'},
      {icon:'', label:'Cards', path:'ui-elements/cards'},
      {icon:'', label:'Adavnced Cards', path:'ui-elements/advanced-cards'},
      {icon:'', label:'Dropdowns', path:'ui-elements/dropdowns'},
      {icon:'', label:'List Items', path:'ui-elements/list-items'},
      {icon:'', label:'Progress Bars', path:'ui-elements/progress-bars'},
      {icon:'', label:'Placeholders', path:'ui-elements/placeholders'},
      {icon:'', label:'Spinners', path:'ui-elements/spinners'},
     ]},
     {icon:'ri-notification-badge-line', label:'Jquery Components', path:'app/jquery-components', children:[
      {icon:'', label:'Accordions', path:'jquery-components/accordions'},
      {icon:'', label:'Carousel', path:'jquery-components/carousel'},
      {icon:'', label:'Modals', path:'jquery-components/modals'},
      {icon:'', label:'Accordions', path:'jquery-components/accordions'},
      {icon:'', label:'Popovers', path:'jquery-components/popovers'},
      {icon:'', label:'Tabs', path:'jquery-components/tabs'},
      {icon:'', label:'Tooltips', path:'jquery-components/tooltips'},
    ]},
    {icon:'ri-terminal-window-line', label:'Forms', path:'app/forms', children:[
      {icon:'', label:'Form Inputs', path:'forms/form-inputs'},
      {icon:'', label:'Checkbox & Radio', path:'forms/form-inputs'},
      {icon:'', label:'File Inputs', path:'forms/file-inputs'},
      {icon:'', label:'Validations', path:'forms/validators'},      
      {icon:'', label:'Date Time Pickers', path:'forms/date-time-pickers'},
      {icon:'', label:'Input Masks', path:'forms/input-masks'},
      {icon:'', label:'Input Tasks', path:'forms/input-tasks'},
    ]},
    {icon:'ri-table-line', label:'Tables', path:'app/tables', children:[]},
    {icon:'ri-bar-chart-line', label:'Graphs', path:'app/graphs', children:[
      {icon:'', label:'Apex Graphs', path:'forms/apex-graphs'},
      {icon:'', label:'Morris Graphs', path:'forms/morris-graphs'},
     ]},
     {icon:'ri-road-map-line', label:'Vector Maps', path:'app/vactor-maps', children:[]},
     {icon:'ri-send-plane-2-line', label:'Icons', path:'app/icons', children:[]},
     {icon:'ri-settings-5-line', label:'Account Settings', path:'app/account-settings', children:[]},
     {icon:'ri-font-size', label:'Topography', path:'app/topography', children:[]},
     {icon:'ri-login-circle-line', label:'Login/Signup', path:'app/login-signup', children:[
      {icon:'', label:'Login', path:'login-signup/login'},
      {icon:'', label:'Signup', path:'login-signup/signup'},
      {icon:'', label:'Forgot Password', path:'login-signup/forgot-password'},
      {icon:'', label:'Reset Password', path:'login-signup/reset-password'},
    ]},
    {icon:'ri-alert-line', label:'Page Not Found', path:'app/page-not-found', children:[]},
    {icon:'ri-auction-line', label:'Maintenance', path:'app/maintentance', children:[]},
    {icon:'ri-dropdown-list', label:'Menu Level', path:'app/menu-level', children:[
      {icon:'', label:'Level One Link', path:'menu-level/level-one-link'},
      {icon:'', label:'Level One Menu', path:'menu-level/level-one-menu', children:[
        {icon:'', label:'Level Two Link', path:'menu-level/level-two-menu/level-two-link'},
        {icon:'', label:'Level Two Menu', path:'menu-level/level-one-menu/level-two-menu', children:[
          {icon:'', label:'Level Three Link', path:'menu-level/level-one-menu/leveltwo-menu'},
        ]},
      ]},
    ]},
    {icon:'ri-send-plane-line', label:'External Link', path:'app/external-link', children:[]},
    {icon:'ri-exchange-line', label:'Chip', path:'app/chip', children:[]},
    {icon:'ri-ticket-line', label:'Badge', path:'app/badge', children:[]},
    {icon:'ri-magic-line', label:'Disabled Link', path:'app/diabled-link', children:[]},
  ]
 
  toggleDrawer(drawer: any) {
    drawer.toggle();
  }

  onMenuItemClick(item: any) {
    console.log('Clicked:', item.label);
    
  }

  SlideBarVisible = false;

  
  showSlideBar() {
   console.log('mouseenter');
    this.SlideBarVisible = true;
  }

  
  hideSlideBar() {
    console.log('mouseleave');
    this.SlideBarVisible = false;
  }
}




