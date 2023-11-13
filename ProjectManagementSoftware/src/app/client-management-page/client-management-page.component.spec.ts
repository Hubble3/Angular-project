import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagementPageComponent } from './client-management-page.component';

describe('ClientManagementPageComponent', () => {
  let component: ClientManagementPageComponent;
  let fixture: ComponentFixture<ClientManagementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientManagementPageComponent]
    });
    fixture = TestBed.createComponent(ClientManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
