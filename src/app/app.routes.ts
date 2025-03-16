import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';
import { MedicalDashboardComponent } from './medical-dashboard/medical-dashboard.component';

export const routes: Routes = [
  {
    path: 'hospital-dashboard',
    component: HospitalDashboardComponent
  },
  {
    path: 'medical-dashboard',
    component: MedicalDashboardComponent
  },
];

