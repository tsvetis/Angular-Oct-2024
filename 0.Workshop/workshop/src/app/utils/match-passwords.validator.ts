import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordControlName: string,
  rePasswordControlname: string
): ValidatorFn {
  return (control) => {
    const passwordFormControl = control.get(passwordControlName);
    const rePasswordFormControl = control.get(rePasswordControlname);

    const passwordsAreMatching =
      passwordFormControl?.value === rePasswordFormControl?.value;

    return passwordsAreMatching ? null : { matchPasswordsValidator: true };
  };
}
