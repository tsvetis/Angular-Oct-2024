import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainStr = domains.join('|');
  const regExp = new RegExp(`[A-Za-z0-9]{6,}@gmail\.(${domainStr})`);

  return (control) => {
    const isInvalid = control.value === '' || regExp.test(control.value);
    return isInvalid ? null : { emailValidator: true };
  };
}
