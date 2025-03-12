import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, NgIf, MatSidenavModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuItem= [
    {icon:'ri-home-6-line', label:'Hospital Dashboard', path:'app/hospital-dashboard', childern:[]},
    {icon:'ri-home-smile-2-line', label:'Medical Dashboard', path:'app/medical-dashboard', childern:[]},
    {icon:'ri-home-5-line', label:'Dentist Dashboard', path:'app/dentist-dashboard', childern:[]},
    {icon:'ri-stethoscope-line', label:'Doctors', path:'app/doctors', childern:[
       {icon:'', label: 'Doctors Dashboard', path:'doctors/doctors-dashboard'},
       {icon:'', label: 'Doctors List', path:'doctors/doctors-list'},
       {icon:'', label: 'Doctors Card', path:'doctors/doctors-card'},
       {icon:'', label: 'Doctors Profile', path:'doctors/doctors-profile'},
       {icon:'', label: 'Add Doctor', path:'doctors/add-doctor'},
       {icon:'', label: 'Edit Doctor', path:'doctors/edit-doctor'},
    ]},
    {icon:'ri-heart-pulse-line', label:'Patients', path:'app/patients', childern:[
      {icon:'', label:'Patients Dashboard', path:'patients/patients-dashboard'},
      {icon:'', label:'Patients List', path:'patients/patients-list'},
      {icon:'', label:'Add Patients', path:'patients/add-patients'},
      {icon:'', label:'Edit Patients Details', path:'patients/edit-patients-details'},
    ]},
    {icon:'ri-nurse-line', label:'Staff', path:'app/staff', childern:[
      {icon:'', label:'Staff List', path:'staff/staff-list'},
      {icon:'', label:'Add Staff', path:'staff/add-staff'},
      {icon:'', label:'Edit Staff Details', path:'staff/edit-staff-details'},
    ]},
    {icon:'ri-dossier-line', label:'Appointments', path:'app/appointments', childern:[
      {icon:'', label:'Appointments', path:'appointments/appointments1'},
      {icon:'', label:'Appointments List', path:'appointments/appointments-list'},
      {icon:'', label:'Book Appointment', path:'appointments/book-appointment'},
      {icon:'', label:'Edit Appointment', path:'appointments/edit-appointment'},
    ]},
    {icon:'ri-building-2-line', label:'Departments', path:'app/departments', childern:[
      {icon:'', label:'Departments List', path:'departments/departments-list'},
      {icon:'', label:'Book Department', path:'departments/book-department'},
      {icon:'', label:'Edit Department', path:'departments/edit-department'},
    ]},
    {icon:'ri-secure-payment-line', label:'Accounts', path:'app/accounts', childern:[
      {icon:'', label:'Income', path:'accounts/income'},
      {icon:'', label:'Payments', path:'accounts/paymets'},
      {icon:'', label:'Invoices', path:'accounts/invoices'},
      {icon:'', label:'Invoice Details', path:'accounts/invoice-detail'},
      {icon:'', label:'Create Invoice', path:'accounts/create-invoice'},
      {icon:'', label:'Expenses', path:'accounts/expenses'},
    ]},
    {icon:'ri-group-2-line', label:'Human Resources', path:'app/resources', childern:[
      {icon:'', label:'HR Approvals', path:'human-resources/hr-approvals'},
      {icon:'', label:'Attendance', path:'human-resources/attendance'},
      {icon:'', label:'Staff Leaves', path:'human-resources/stadd-leaves'},
      {icon:'', label:'Holidays', path:'human-resources/holidays'},
    ]},
    {icon:'ri-money-dollar-circle-line', label:'Salaries', path:'app/slaries', childern:[
      {icon:'', label:'Salary List', path:'staff/salary-list'},
      {icon:'', label:'Payslip', path:'staff/payslip'},
    ]},
    {icon:'ri-hotel-bed-line', label:'Rooms', path:'app/rooms', childern:[
      {icon:'', label:'Statistics', path:'rooms/statistics'},
      {icon:'', label:'Room Alloted', path:'rooms/rooms-alloted'},
      {icon:'', label:'Rooms By Department', path:'rooms/rooms-by-department'},
      {icon:'', label:'Available Rooms', path:'rooms/available-rooms'},
      {icon:'', label:'Book Room', path:'rooms/book-rooms'},
      {icon:'', label:'Add Room', path:'rooms/add-rooms'},
      {icon:'', label:'Edit Room', path:'rooms/edit-rooms'},
    ]},
    {icon:'ri-car-washing-line', label:'Ambulance', path:'app/ambulance', childern:[
      {icon:'', label:'Ambulance List', path:'ambulance/ambulance-list'},
      {icon:'', label:'Add Ambulance', path:'ambulance/add-ambulance'},
      {icon:'', label:'Edit Ambulance', path:'ambulance/edit-ambulance'},
      {icon:'', label:'Ambulance Call List', path:'ambulance/ambulance-call-list'},
    ]},
    {icon:'ri-calendar-line', label:'Event Management', path:'app/event-managemnet', childern:[]},
    {icon: 'ri-tent-line', label:'Gallery', path:'app/gallery', childern:[]},
    {icon:'ri-news-line', label:'News & Updates', path:'app/news-updates', childern:[]},
    {icon:'ri-color-filter-line', label:'UI Elements', path:'app/ui-elements', childern:[
      {icon:'', label:'Alerts', path:'ui-elements/alerts'},
      {icon:'', label:'Avatars', path:'ui-elements/avatars'},
      {icon:'', label:'Badges', path:'ui-elements/badges'},
      {icon:'', label:'Buttons', path:'ui-elements/buttons'},
      {icon:'', label:'Button Group', path:'ui-elements/button-group'},
      {icon:'', label:'Cards', path:'ui-elements/cards'},
      {icon:'', label:'Advanced Cards', path:'ui-elements/advanced-cards'},
      {icon:'', label:'Dropdowns', path:'ui-elements/dropdowns'},
      {icon:'', label:'List Items', path:'ui-elements/list-items'},
      {icon:'', label:'Progress Bars', path:'ui-elements/progress-bars'},
      {icon:'', label:'Placeholders', path:'ui-elements/placeholders'},
      {icon:'', label:'Spinners', path:'ui-elements/spinners'},
    ]},
    {icon:'ri-notification-badge-line', label:'Jquery Components', path:'app/jquery-components', childern:[
      {icon:'', label:'Accordions', path:'jquery-components/accordions'},
      {icon:'', label:'Carousel', path:'jquery-components/carousel'},
      {icon:'', label:'Modals', path:'jquery-components/modals'},
      {icon:'', label:'Popovers', path:'jquery-components/popovers'},
      {icon:'', label:'Tabs', path:'jquery-components/tabs'},
      {icon:'', label:'Tooltips', path:'jquery-components/tooltips'},
    ]},
    {icon:'ri-terminal-window-line', label:'Forms', path:'app/forms', childern:[
      {icon:'', label:'Forms Inputs', path:'forms/forms-input'},
      {icon:'', label:'Checkbox & Radio', path:'forms/checkbox-radio'},
      {icon:'', label:'File Input', path:'forms/file-input'},
      {icon:'', label:'Validations', path:'forms/validators'},
      {icon:'', label:'Date Time Picker', path:'forms/datetime-pickers'},
      {icon:'', label:'Input Masks', path:'forms/input-masks'},
      {icon:'', label:'Input Tags', path:'forms/input-tags'},
    ]},
    {icon:'ri-table-line', label:'Tables', path:'app/tables', childern:[]},
    {icon:'ri-table-line', label:'Graphs', path:'app/graphs', childern:[
      {icon:'', label:'Apex Graphs', path:'graphs/apex-graphs'},
      {icon:'', label:'Morris Graphs', path:'graphs/morris-graphs'},
    ]},
    {icon:'ri-road-map-line', label:'Vector Maps', path:'app/vactor-maps', childern:[]},
    {icon:'ri-send-plane-2-line', label:'Icons', path:'app/icons', childern:[]},
    {icon:'ri-settings-5-line', label:'Account Settings', path:'app/account-settings', childern:[]},
    {icon:'ri-font-size', label:'Topography', path:'app/topography', childern:[]},
    {icon:'ri-login-circle-line', label:'Login/Signup', path:'app/login-signup', childern:[
      {icon:'', label:'Login', path:'login-signup/login'},
      {icon:'', label:'Signup', path:'login-signup/signup'},
      {icon:'', label:'Forgot Password', path:'login-signup/forgot-password'},
      {icon:'', label:'Reset Password', path:'login-signup/reset-password'},
    ]},
    {icon:'ri-alert-line', label:'Page Not Found', path:'app/pagenotfound', childern:[]},
    {icon:'ri-auction-line', label:'Maintenance', path:'app/maintenance', childern:[]},
    {icon:'ri-dropdown-list', label:'Menu Level', path:'app/menu-level', childern:[
      {icon:'', label:'Level One Link', path:'menu-level/level-one-link'},
      {icon:'', label:'Level One Menu', path:'menu-level/level-one-menu', childern:[
        {icon:'', label:'Level Two Link', path:'menu-level/level-one-menu/level-two-link'},
      {icon:'', label:'Level Two Menu', path:'login-signup/level-two-menu', childern:[
        {icon:'', label:'Level Three Link', path:'menu-level/level-one-menu/level-two-menu/level-three-link'},
      ]},
      ]},
    ]},
    {icon:'ri-send-plane-line', label:'External Link', path:'app/external-link', childern:[]},
    {icon:'ri-exchange-line', label:'Chip', path:'app/chip', childern:[]},
    {icon:'ri-ticket-line', label:'Badge', path:'app/badge', childern:[]},
    {icon:'ri-magic-line', label:'Disabled Link', path:'app/disabled-link', childern:[]},
  ]

  isSidebarOpen = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}

  flagsVisible = false;

  // Show flags when hovering over the French flag
  showFlags() {
    console.log('showflags');
    this.flagsVisible = true;
  }

  // Hide flags when mouse leaves the French flag
  hideFlags() {
    console.log('hideFlags');
    this.flagsVisible = false;
  }
}

