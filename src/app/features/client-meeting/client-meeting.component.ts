import { Component } from '@angular/core';

@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrls: ['./client-meeting.component.css']
})
export class ClientMeetingComponent {

  // Dummy client data
  clients = [
    {
      name: 'John Doe',
      email: 'JDoe@gmail.com',
      phone: '1234567890',
      project: 'Residential Building',
      meetingTime: 'October 12, 2024, 10:00 AM'
    },
    {
      name: 'Jane Smith',
      email: 'JSmith@yahoo.com',
      phone: '0987654321',
      project: 'Office Renovation',
      meetingTime: 'October 13, 2024, 2:00 PM'
    },
    {
      name: 'Sam Johnson',
      email: 'SJohnson@hotmail.com',
      phone: '1112223334',
      project: 'Retail Store Design',
      meetingTime: 'October 14, 2024, 1:00 PM'
    },
    {
      name: 'Emily Davis',
      email: 'EDavis@aol.com',
      phone: '8657436979',
      project: 'Restaurant Interior',
      meetingTime: 'October 15, 2024, 9:00 AM'
    },
    {
      name: 'William Turner',
      email: 'WTurner@gmail.com',
      phone: '3244764587',
      project: 'Boat Dock Sturcture',
      meetingTime: 'October 16, 2024, 7:00 AM'
    }
  ];
}
