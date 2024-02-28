import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public messageFromParent: any

  @Output() public messageEvent = new EventEmitter()

  sendMessage(){
    this.messageEvent.emit("bola na parent component")
  }

}
