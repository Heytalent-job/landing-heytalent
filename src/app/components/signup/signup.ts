import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from '../../shared/icon/icon';
import { INTERESTS, UNIVERSITIES, WHATSAPP_URL } from '../../data/site-content';
import { EMAIL_PATTERN, trimmedMinLength } from '../../shared/validators';

@Component({
  selector: 'app-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Icon],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private readonly fb = inject(FormBuilder);

  protected readonly universities = UNIVERSITIES;
  protected readonly interests = INTERESTS;
  protected readonly whatsappUrl = WHATSAPP_URL;

  protected readonly submitted = signal(false);
  protected readonly sent = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', trimmedMinLength(3)],
    // `pattern` alone passes on an empty value, so `required` carries the empty case.
    correo: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    universidad: ['', Validators.required],
    carrera: ['', trimmedMinLength(2)],
    interes: ['', Validators.required],
  });

  protected showError(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  protected onSubmit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      return;
    }

    // No backend yet: the original landing only confirmed the submission on screen.
    this.sent.set(true);
  }
}
