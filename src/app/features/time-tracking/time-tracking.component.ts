
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuid } from 'uuid';
import { TimeEntryService } from '../../core/services/time-entry.service';

@Component({
 selector:'app-time-tracking',
 standalone:true,
 imports:[CommonModule, FormsModule],
 templateUrl:'./time-tracking.component.html'
})
export class TimeTrackingComponent {
  employee=''; start=''; end=''; entries:any[]=[];

  constructor(private s:TimeEntryService){
    this.entries=s.getAll();
    // optional: subscribe to external changes as well
    this.s.change$.subscribe(()=> this.entries = this.s.getAll());
  }

  add(){
    if(!this.employee||!this.start||!this.end)return;
    this.s.add({id:uuid(),employee:this.employee,start:this.start,end:this.end});
    this.entries=this.s.getAll();
    this.employee=this.start=this.end='';
  }

  del(id:string){ 
    this.s.delete(id); 
    this.entries=this.s.getAll(); 
  }
}
