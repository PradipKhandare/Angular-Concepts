import { Component } from '@angular/core';
import { WaiterService } from '../waiter.service';
import { IBatches } from '../batches';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent {

  constructor(public obj: WaiterService){}

  public batches: IBatches[] = []

  ngOnInit(){
     this.obj.getBatchDetails().subscribe(data => {
      this.batches = data
  })  
  }

}
