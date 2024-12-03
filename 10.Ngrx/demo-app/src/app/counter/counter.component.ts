import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter$ = new Observable<number>();

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
