import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
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

  /** El menú compacto sólo existe por debajo de `lg`. */
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
