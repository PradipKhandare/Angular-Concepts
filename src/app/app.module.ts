import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistsComponent } from './batchlists/batchlists.component';
import { DemoserviceService } from './demoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BatchdetailsComponent,
    BatchlistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DemoserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
