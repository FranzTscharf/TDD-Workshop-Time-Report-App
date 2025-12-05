
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeEntryService } from '../../core/services/time-entry.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-month-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './month-view.component.html'
})
export class MonthViewComponent implements OnDestroy {
  entries:any[]=[];
  selectedMonth = new Date().toISOString().slice(0,7);
  grouped:{[date:string]:number}={};
  totalHours=0;
  sub: Subscription;

  constructor(private s:TimeEntryService){
    this.load();
    this.sub = this.s.change$.subscribe(()=> this.load());
  }

  load(){
    const all = this.s.getAll();
    this.entries = all.filter(e=> typeof e.start === 'string' && e.start.startsWith(this.selectedMonth));
    this.grouped={}; 
    this.totalHours=0;

    for(let entry of this.entries){
      if(!entry.start || !entry.end) continue;
      const date = (entry.start as string).slice(0,10);
      const start = new Date(entry.start);
      const end = new Date(entry.end);
      const diffMs = end.getTime() - start.getTime();
      if (isNaN(diffMs) || diffMs < 0) continue;
      const hours = diffMs/1000/3600;

      if(!this.grouped[date]) this.grouped[date]=0;
      this.grouped[date]+=hours;
      this.totalHours+=hours;
    }
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();
  }
}
