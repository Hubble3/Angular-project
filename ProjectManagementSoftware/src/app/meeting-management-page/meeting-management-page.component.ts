// src/app/meeting-management-page/meeting-management-page.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-management-page',
  templateUrl: './meeting-management-page.component.html',
  styleUrls: ['./meeting-management-page.component.css']
})
export class MeetingManagementPageComponent {
  meetings = [
    { title: 'Meeting 1', date: new Date(), location: 'Office', agenda: 'Discuss project updates' },
    { title: 'Meeting 2', date: new Date(), location: 'Online', agenda: 'Planning for upcoming events' },
  ];

  showAddMeetingForm = false;
  newMeeting = { title: '', date: '', location: '', agenda: '' };

  onAddMeeting() {
    this.showAddMeetingForm = !this.showAddMeetingForm;
  }

  addMeeting() {
    this.meetings.push({ ...this.newMeeting, date: new Date(this.newMeeting.date) });
    this.resetAddMeetingForm();
  }

  resetAddMeetingForm() {
    this.newMeeting = { title: '', date: '', location: '', agenda: '' };
    this.showAddMeetingForm = false;
  }
}
