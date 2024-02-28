import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBatches } from './batches';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  constructor(public hobj: HttpClient) { }

  public url: string = "./assets/Data/batches.json"; //It will replace the server url.

  getBatchDetails(): Observable<IBatches[]>{
    return this.hobj.get<IBatches[]>(this.url); 
  }

}
