import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { Icon } from '@heytalent/ui';


interface EventCard {
  speaker: string;
  title: string;
  image: string;
  detailsImage?: string;
  category: string;
  date: string;
  modality: string;
}


@Component({
  selector: 'app-projects',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);


  /* ========================================
     EVENTOS
     ======================================== */

protected readonly events: EventCard[] = [
  {
    speaker: 'Sandro Agama',
    title:
      'Internacionaliza tu talento: de Ingeniería Industrial a Data Analytics',
    image: '/images/events/sandro.webp',
    detailsImage: '/images/events/sandro-post.webp',
    category: 'Webinar',
    date: '02/08/26',
    modality: 'Virtual',
  },

  {
    speaker: 'Daniela Torres',
    title:
      'Estrategias de Marketing para Potenciar tu Perfil Profesional',
    image: '/images/events/daniela.webp',
    category: 'Webinar',
    date: '19/03/26',
    modality: 'Virtual',
  },

  {
    speaker: 'Franko Vilchez Marcos',
    title:
      'Taller de empleabilidad - COE Business School',
    image: '/images/events/franko.webp',
    category: 'Taller',
    date: '22/08/26',
    modality: 'Presencial',
  },

  {
    speaker: 'Tania Gamboa Rojas',
    title:
      'Europa al Alcance: Estudia, Trabaja y Viaja siendo Peruano',
    image: '/images/events/tania.webp',
    category: 'Webinar',
    date: '15/06/26',
    modality: 'Virtual',
  },
];


  /* ========================================
     MODAL
     ======================================== */

  protected readonly selectedEvent =
    signal<EventCard | null>(null);


  protected openDetails(event: EventCard): void {

    /*
     * Solo abre el modal si el evento
     * tiene una imagen de detalles.
     */
    if (!event.detailsImage) {
      return;
    }

    /*
     * Pausamos el carrusel mientras
     * el usuario ve el modal.
     */
    this.stopAutoPlay();

    this.selectedEvent.set(event);
  }


  protected closeDetails(): void {
    this.selectedEvent.set(null);

    /*
     * Volvemos a iniciar el carrusel
     * cuando se cierre el modal.
     */
    this.startAutoPlay();
  }


  /*
   * Permite cerrar el modal
   * presionando ESC.
   */
  @HostListener('document:keydown.escape')
  protected onEscape(): void {

    if (this.selectedEvent()) {
      this.closeDetails();
    }
  }


  /* ========================================
     CARRUSEL
     ======================================== */

  protected readonly currentIndex = signal(0);

  protected readonly visibleEvents = signal(3);


  private autoPlayTimer:
    ReturnType<typeof setInterval> | null = null;


  private readonly intervalMs = 4500;


  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      this.updateVisibleEvents();

      this.startAutoPlay();
    }
  }


  ngOnDestroy(): void {
    this.stopAutoPlay();
  }


  /* ========================================
     RESPONSIVE DEL CARRUSEL
     ======================================== */

  @HostListener('window:resize')
  protected onResize(): void {

    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibleEvents();
    }
  }


  private updateVisibleEvents(): void {

    const width = window.innerWidth;


    /* Escritorio */

    if (width >= 1024) {

      this.visibleEvents.set(3);

    }


    /* Tablet */

    else if (width >= 640) {

      this.visibleEvents.set(2);

    }


    /* Celular */

    else {

      this.visibleEvents.set(1);

    }


    /*
     * Evita posiciones inválidas cuando
     * se cambia de tamaño de pantalla.
     */
    this.currentIndex.set(0);
  }


  /* ========================================
     SIGUIENTE
     ======================================== */

  protected next(): void {

    this.resetTimer();


    const visible = this.visibleEvents();

    const nextIndex =
      this.currentIndex() + visible;


    if (nextIndex >= this.events.length) {

      this.currentIndex.set(0);

    } else {

      this.currentIndex.set(nextIndex);

    }
  }


  /* ========================================
     ANTERIOR
     ======================================== */

  protected prev(): void {

    this.resetTimer();


    const visible = this.visibleEvents();

    const previousIndex =
      this.currentIndex() - visible;


    if (previousIndex < 0) {

      this.currentIndex.set(
        Math.max(
          this.events.length - visible,
          0,
        ),
      );

    } else {

      this.currentIndex.set(previousIndex);

    }
  }


  /* ========================================
     AUTOPLAY
     ======================================== */

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