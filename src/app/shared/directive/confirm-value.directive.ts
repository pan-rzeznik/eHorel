import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appConfirmValue]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmValueDirective,
    multi: true
  }]
})
export class ConfirmValueDirective implements Validator {
  @Input() appConfirmValue: string;
  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const controlToCompare = control.parent.get(this.appConfirmValue);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { notEqual: true };
    }
    return null;
  }

}
