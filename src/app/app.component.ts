import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercises-angular';

  firstCounter: number = 0;
  secondCounter: number = 0;

  addDisabled: boolean = false;
  substractDisabled: boolean = false;

  ngOnInit() {
    this.updateButtonsStatus();
  }

  updateFirstCounter(value: number) {
    this.firstCounter = value;
    this.updateButtonsStatus();
  }

  updateSecondCounter(value: number) {
    this.secondCounter = value;
    this.updateButtonsStatus();
  }

  resetCounters() {
    this.firstCounter = 0;
    this.secondCounter = 0;
    this.updateButtonsStatus();
  }

  updateButtonsStatus() {
    this.addDisabled = this.firstCounter + this.secondCounter >= 20;
    this.substractDisabled = this.firstCounter + this.secondCounter <= 0;
  }
}
