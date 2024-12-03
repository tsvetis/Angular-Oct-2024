import { Component, importProvidersFrom } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { TranslateComponent } from './translate/translate.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, TranslateComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-app';
}
