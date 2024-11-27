import { Component, OnInit, signal } from '@angular/core';
import { ErrorMsgService } from './error-msg.service';

@Component({
  selector: 'app-error-msg',
  standalone: true,
  imports: [],
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css',
})
export class ErrorMsgComponent implements OnInit {
  errorMsg = signal('');
  constructor(private errorMsgService: ErrorMsgService) {}

  ngOnInit(): void {
    this.errorMsgService.apiError$.subscribe((err: any) => {
      this.errorMsg.set(err?.message);
    });
  }
}
