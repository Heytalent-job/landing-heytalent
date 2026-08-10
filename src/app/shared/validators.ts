import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Requires at least `min` characters once surrounding whitespace is ignored. */
export function trimmedMinLength(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '') as string;
    return value.trim().length >= min ? null : { trimmedMinLength: { min } };
  };
}

/** Same shape the original landing validated against: something@something.tld */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
