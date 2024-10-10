import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSchedulingComponent } from './client-scheduling.component';

describe('ClientSchedulingComponent', () => {
  let component: ClientSchedulingComponent;
  let fixture: ComponentFixture<ClientSchedulingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientSchedulingComponent]
    });
    fixture = TestBed.createComponent(ClientSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
