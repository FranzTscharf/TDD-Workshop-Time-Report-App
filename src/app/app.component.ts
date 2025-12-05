
import { Component } from '@angular/core';
import { TimeTrackingComponent } from './features/time-tracking/time-tracking.component';
import { MonthViewComponent } from './features/month-view/month-view.component';

@Component({
  selector:'app-root',
  standalone:true,
  imports:[TimeTrackingComponent, MonthViewComponent],
  template:`<app-time-tracking></app-time-tracking><app-month-view></app-month-view>`
})
export class AppComponent {}
