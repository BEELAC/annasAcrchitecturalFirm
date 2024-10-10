import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components
import { HomeComponent } from './features/home/home.component';
import { ClientMeetingComponent } from './features/client-meeting/client-meeting.component';
import { ClientSchedulingComponent } from './features/client-scheduling/client-scheduling.component';

// Defining routes
const routes: Routes = [
  {path: '', component: HomeComponent}, // Default route pointing to HomeComponent
  {path: 'client-meeting', component: ClientMeetingComponent}, // Route for client meetings
  {path: 'client-scheduling', component: ClientSchedulingComponent}, // Route for client scheduling
  {path: '**', redirectTo: ''} // This redirects any unkown paths to the home page
];

// Configuring RouterModule with the routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Export RouterModule to make it available throughout your app
})
export class AppRoutingModule { }
