// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientManagementPageComponent } from './client-management-page/client-management-page.component';
import { MeetingManagementPageComponent } from './meeting-management-page/meeting-management-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientManagementPageComponent,
    MeetingManagementPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
