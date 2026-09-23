import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Icon } from '@heytalent/ui';
import { PARTNERS_SECTION, PARTNERS } from '../../data/site-content';

@Component({
  selector: 'app-partners',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly section = PARTNERS_SECTION;
  protected readonly partners = PARTNERS;

  /**
   * Buffer de 3 repeticiones [prev-buffer, active-set, next-buffer]
   * para garantizar un carrusel circular 100% continuo sin saltos visuales ni retrocesos.
   */
  protected readonly carouselItems = computed(() => [
    ...this.partners,
    ...this.partners,
    ...this.partners,
  ]);

  /** Iniciamos en el set central (índice = longitud de la lista original) */
  protected readonly currentIndex = signal(this.partners.length);
  protected readonly withTransition = signal(true);

  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private readonly intervalMs = 3500;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  protected next(): void {
    this.resetTimer();
    this.withTransition.set(true);
    this.currentIndex.update((index) => index + 1);
  }

  protected prev(): void {
    this.resetTimer();
    this.withTransition.set(true);
    this.currentIndex.update((index) => index - 1);
  }

  /**
   * Al terminar la animación CSS de transición, si el índice salió del set central,
   * se reajusta silenciosamente al set central (con transition: none) sin ningún salto perceptible.
   */
  protected onTransitionEnd(): void {
    const len = this.partners.length;
    const current = this.currentIndex();

    if (current >= 2 * len) {
      this.withTransition.set(false);
      this.currentIndex.set(current - len);
    } else if (current < len) {
      this.withTransition.set(false);
      this.currentIndex.set(current + len);
    }
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.next();
    }, this.intervalMs);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  private resetTimer(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
