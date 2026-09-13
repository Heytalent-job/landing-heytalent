import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Icon } from '@heytalent/ui';
import { BRAND, HERO } from '../../data/site-content';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly brand = BRAND;
  protected readonly hero = HERO;

  protected readonly query = signal('');

  /** El buscador manda a /empleos arrastrando el término tecleado. */
  protected get searchHref(): string {
    const q = this.query().trim();
    return q ? `/empleos?q=${encodeURIComponent(q)}` : '/empleos';
  }

  protected onInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
