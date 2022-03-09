import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenEmailAddress(emailRegs: RegExp[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    for (let i = 0; i < emailRegs.length; i++) {
      if (emailRegs[i].test(control.value)) {
        return { forbiddenEmailAddress: { value: control.value } };
      }
    }

    return null;
  };
}
