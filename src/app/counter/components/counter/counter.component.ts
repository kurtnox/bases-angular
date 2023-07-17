
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>


    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()"> reset</button>`

})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  public counter: number = 1

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
