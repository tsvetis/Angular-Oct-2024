import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css',
})
export class TranslateComponent {
  msg$ = new Observable<string>();

  constructor(private store: Store<{ msg: string }>) {
    this.msg$ = this.store.select('msg');
  }

  enMsg() {
    this.store.dispatch({ type: 'EN' });
  }

  bgMsg() {
    this.store.dispatch({ type: 'BG' });
  }

  itMsg() {
    this.store.dispatch({ type: 'IT' });
  }
}
