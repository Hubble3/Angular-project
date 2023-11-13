// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientManagementPageComponent } from './client-management-page/client-management-page.component';
import { MeetingManagementPageComponent } from './meeting-management-page/meeting-management-page.component';

// src/app/app-routing.module.ts

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'client-management', component: ClientManagementPageComponent },
      { path: 'meeting-management', component: MeetingManagementPageComponent },
      { path: '', redirectTo: '/dashboard/client-management', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
