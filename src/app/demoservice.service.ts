import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DemoserviceService {
  //logic always should be inside a class.
  constructor() { }

  public batches =  [
    {"name":"Angular", "Fees": 18500, "Duration": "3.5 months"},
    {"name":"Java", "Fees": 18500, "Duration": "3.5 months"},
    {"name":"Python", "Fees": 18500, "Duration": "3.5 months"}
  ]

  public getBatchDetails(){
    return this.batches
  }
}
