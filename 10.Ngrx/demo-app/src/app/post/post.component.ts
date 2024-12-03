import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post, PostState } from './type';
import { Observable } from 'rxjs';
import { Downvote, Edit, Reset, Upvote } from './post.action';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AsyncPipe, NgIf, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  post$ = new Observable<Post>();
  textMsg = '';

  constructor(private store: Store<PostState>) {
    this.post$ = this.store.select('post');
  }

  upvote() {
    this.store.dispatch(new Upvote());
  }

  downvote() {
    this.store.dispatch(new Downvote());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  edit() {
    this.store.dispatch(new Edit(this.textMsg));
  }
}
