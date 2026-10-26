import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Icon } from '@heytalent/ui';
import { BRAND, NAV_LINKS } from '../../data/site-content';

@Component({
  selector: 'app-site-header',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  protected readonly brand = BRAND;
  protected readonly navLinks = NAV_LINKS;

  /** Menú desplegable: sólo visible por debajo de `lg`. */
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  /** Al pulsar un enlace el salto ya ocurre: cerramos para no tapar la sección. */
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
