import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static cannotLessThanZero(control: AbstractControl): ValidationErrors | null {
        const price = +control.value;

        if (price < 0) {
            return {cannotLessThanZero: true};
        } else {
            return null;
        }
    }
}
