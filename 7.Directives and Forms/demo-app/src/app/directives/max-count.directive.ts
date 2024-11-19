import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: MaxCountDirective,
    },
  ],
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    const len = control.value?.length || 0;

    if (!this.appMaxCount || len <= this.appMaxCount) {
      return null;
    }

    return { appMaxCount: this.appMaxCount };
  }
}
