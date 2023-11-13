// src/app/client-management/client-management.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  clients = [
    { name: 'Client 1', email: 'client1@email.com', phone: '123-456-7890' },
    { name: 'Client 2', email: 'client2@email.com', phone: '987-654-3210' },
    // Add more client data as needed
  ];

  onAddClient() {
    const newClient = { name: 'New Client', email: 'newclient@email.com', phone: '000-000-0000' };
    this.clients.push(newClient);
  }
}
