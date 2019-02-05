import { Component } from '@angular/core';

const day = 1000 * 60 * 60 * 24;
const roundTo = (value, to) => {
  const power = Math.pow(10, to)
  return Math.round(value * power) / power
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  daysToBrexit: string|number = '???'

  constructor() {
    this.setDateUpdate()
  }

  setDateUpdate() {
    setInterval(() => {
      const diff = <any>new Date('2019/03/29') - <any>new Date();
      this.daysToBrexit = roundTo(diff / day, 3)
    }, 1000)
  }
}
