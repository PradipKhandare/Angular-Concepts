import { Component } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-batchlists',
  templateUrl: './batchlists.component.html',
  styleUrl: './batchlists.component.css'
})
export class BatchlistsComponent {

  public batchName: any = []

  constructor(public obj: DemoserviceService){

  }
//ng on initalization
  ngOnInit(): void{
    this.batchName = this.obj.getBatchDetails()
  }

  //public batchList = ["Angular", "Java", "Python"]
}
