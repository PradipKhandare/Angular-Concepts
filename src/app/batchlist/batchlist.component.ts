import { Component } from '@angular/core';
import { WaiterService } from '../waiter.service';
import { IBatches } from '../batches';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent {

  constructor(public obj: WaiterService){

  }

  public batches: IBatches[] = []

  ngOnInit(){
    return this.obj.getBatchDetails().subscribe(data => {
       this.batches = data
    })
  }

}
