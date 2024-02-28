import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { HttpClientModule } from '@angular/common/http';
import { WaiterService } from './waiter.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchdetailsComponent,
    BatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WaiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
