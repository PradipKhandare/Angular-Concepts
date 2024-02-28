import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public message = "Kay re child component?"

  public messageFromChild: any

  receivedMessage($event: any){
      this.messageFromChild = $event
  }
}
