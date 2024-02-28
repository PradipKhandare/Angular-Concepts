import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public courses = [ "Java", "Angular", "Python", "iOS", "Android"]

  public fees = [18000, 155999, 121223, 12314, 12345]
}
