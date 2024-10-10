import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ClientMeetingComponent } from './features/client-meeting/client-meeting.component';
import { ClientSchedulingComponent } from './features/client-scheduling/client-scheduling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientMeetingComponent,
    ClientSchedulingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
