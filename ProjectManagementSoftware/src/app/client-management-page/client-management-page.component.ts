// src/app/client-management-page/client-management-page.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-client-management-page',
  templateUrl: './client-management-page.component.html',
  styleUrls: ['./client-management-page.component.css']
})
export class ClientManagementPageComponent {
  clients = [
    { name: 'Client 1', email: 'client1@example.com', phone: '123-456-7890' },
    { name: 'Client 2', email: 'client2@example.com', phone: '987-654-3210' },
  ];

  showAddClientForm = false;
  newClient = { name: '', email: '', phone: '' };

  onAddClient() {
    this.showAddClientForm = !this.showAddClientForm;
  }

  addClient() {
    this.clients.push({ ...this.newClient });
    this.resetAddClientForm();
  }

  resetAddClientForm() {
    this.newClient = { name: '', email: '', phone: '' };
    this.showAddClientForm = false;
  }
}
