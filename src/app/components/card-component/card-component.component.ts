import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss',
})
export class CardComponentComponent {
  @Input() counter: number = 0;
  @Input() substractDisabled: boolean = false;
  @Input() addDisabled: boolean = false;
  @Output() messageEvent = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.messageEvent.emit(this.counter);
  }

  decrement() {
    this.counter--;
    this.messageEvent.emit(this.counter);
  }
}
