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
  category: string;
  date: string;
  time: string;
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

  protected readonly events: EventCard[] = [
    {
      speaker: 'Sandro Agama',
      title:
        'Internacionaliza tu talento: de Ingeniería Industrial a Data Analytics',
      image: '/images/events/sandro.png',
      category: 'Webinar',
      date: '02/08/26',
      time: '18:00 h',
      modality: 'Virtual',
    },

    {
      speaker: 'Juan Kevin Masquez Jimenez',
      title:
        'Power Skills en Acción: Cómo destacar en tu próxima entrevista y no ser descartado',
      image: '/images/events/kevin.png',
      category: 'Taller',
      date: '24/08/26',
      time: '15:00 h',
      modality: 'Presencial',
    },

    {
      speaker: 'Ryan André Herrera Ortega',
      title:
        'Cómo destacar como Data Analyst usando herramientas IA',
      image: '/images/events/ryan.png',
      category: 'Webinar',
      date: '25/06/26',
      time: '19:00 h',
      modality: 'Por definir',
    },

    {
      speaker: 'Daniela Torres',
      title:
        'Estrategias de Marketing para Potenciar tu Perfil Profesional',
      image: '/images/events/daniela.png',
      category: 'Webinar',
      date: '19/03/26',
      time: '20:00 h',
      modality: 'Virtual',
    },

    {
      speaker: 'Franko Vilchez Marcos',
      title:
        'Taller de empleabilidad - COE Business School',
      image: '/images/events/franko.png',
      category: 'Taller',
      date: '22/08/26',
      time: '19:00 h',
      modality: 'Presencial',
    },

    {
      speaker: 'Tania Gamboa Rojas',
      title:
        'Europa al Alcance: Estudia, Trabaja y Viaja siendo Peruano',
      image: '/images/events/tania.png',
      category: 'Webinar',
      date: '15/06/26',
      time: '19:00 h',
      modality: 'Virtual',
    },
  ];

  /*
   * Índice del primer evento visible.
   *
   * Escritorio: 0 → 3 → 0
   * Tablet:     0 → 2 → 4 → 0
   * Celular:    0 → 1 → 2 → 3 → 4 → 5 → 0
   */
  protected readonly currentIndex = signal(0);

  /*
   * Cantidad de tarjetas visibles según el ancho.
   */
  protected readonly visibleEvents = signal(3);

  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;

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

  /*
   * Detectamos cuando cambia el tamaño
   * de la ventana.
   */
  @HostListener('window:resize')
  protected onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibleEvents();
    }
  }

  /*
   * Siguiente grupo.
   */
  protected next(): void {
    this.resetTimer();

    const visible = this.visibleEvents();
    const nextIndex = this.currentIndex() + visible;

    if (nextIndex >= this.events.length) {
      this.currentIndex.set(0);
    } else {
      this.currentIndex.set(nextIndex);
    }
  }

  /*
   * Grupo anterior.
   */
  protected prev(): void {
    this.resetTimer();

    const visible = this.visibleEvents();
    const previousIndex = this.currentIndex() - visible;

    if (previousIndex < 0) {
      this.currentIndex.set(
        Math.max(this.events.length - visible, 0),
      );
    } else {
      this.currentIndex.set(previousIndex);
    }
  }

  /*
   * Define cuántas tarjetas deben verse.
   */
  private updateVisibleEvents(): void {
    const width = window.innerWidth;

    if (width >= 1024) {
      this.visibleEvents.set(3);
    } else if (width >= 640) {
      this.visibleEvents.set(2);
    } else {
      this.visibleEvents.set(1);
    }

    /*
     * Cuando cambia el tamaño,
     * volvemos al primer evento para evitar
     * posiciones inválidas.
     */
    this.currentIndex.set(0);
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