import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.maxLength(5)]),
  });

  handleSubmit() {
    if (this.registerForm.invalid) {
      console.log('Form is invalid!');
      return;
    }

    console.log(this.registerForm.value);

    this.registerForm.reset();
  }
}
