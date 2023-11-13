// src/app/client-meeting-management/client-meeting-management.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-client-meeting-management',
  templateUrl: './client-meeting-management.component.html',
  styleUrls: ['./client-meeting-management.component.css']
})
export class ClientMeetingManagementComponent {
  meetings = [
    { title: 'Meeting 1', date: new Date(), location: 'Office', agenda: 'Discuss project details' },
    { title: 'Meeting 2', date: new Date(), location: 'Zoom', agenda: 'Review project progress' },
    // Add more meeting data as needed
  ];

  onAddMeeting() {
    const newMeeting = {
      title: 'New Meeting',
      date: new Date(),
      location: 'New Location',
      agenda: 'New Agenda'
    };
    this.meetings.push(newMeeting);
  }
}
