import { Component } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent {

  public batches: any = []

  constructor(public objService: DemoserviceService){

  }
  
  ngOnInit(): void{ 
      this.batches = this.objService.getBatchDetails()
  }

  // public batchDetails =  [
  //   {"name":"Angular", "Fees": 18500, "Duration": "3.5 months"},
  //   {"name":"Java", "Fees": 18500, "Duration": "3.5 months"},
  //   {"name":"Python", "Fees": 18500, "Duration": "3.5 months"}
  // ]


}
