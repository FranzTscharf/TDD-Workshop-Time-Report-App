
import { Injectable } from '@angular/core';
import { TimeEntry } from '../models/time-entry.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn:'root' })
export class TimeEntryService {
  KEY='time_entries';
  change$ = new Subject<void>();

  getAll(): TimeEntry[] { 
    return JSON.parse(localStorage.getItem(this.KEY) || '[]'); 
  }

  add(e: TimeEntry){ 
    const a = this.getAll(); 
    a.push(e); 
    localStorage.setItem(this.KEY,JSON.stringify(a)); 
    this.change$.next();
  }

  delete(id:string){ 
    localStorage.setItem(this.KEY, JSON.stringify(this.getAll().filter(x=>x.id!==id))); 
    this.change$.next();
  }
}
