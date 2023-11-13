import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingManagementPageComponent } from './meeting-management-page.component';

describe('MeetingManagementPageComponent', () => {
  let component: MeetingManagementPageComponent;
  let fixture: ComponentFixture<MeetingManagementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingManagementPageComponent]
    });
    fixture = TestBed.createComponent(MeetingManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
