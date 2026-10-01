import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
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


  /* ========================================
     EVENTOS
     ======================================== */

  protected readonly events: EventCard[] = [

    /* EVENTO 1 - SANDRO */

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


  /* ========================================
     CONTROL DEL CARRUSEL
     ======================================== */

  /*
   * Página 0:
   * Sandro - Kevin - Ryan
   *
   * Página 1:
   * Daniela - Franko - Tania
   */

  protected readonly currentPage = signal(0);


  /* ========================================
     AUTOPLAY
     ======================================== */

  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;

  private readonly intervalMs = 4500;


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }


  ngOnDestroy(): void {
    this.stopAutoPlay();
  }


  /* ========================================
     SIGUIENTE
     ======================================== */

  protected next(): void {
    this.resetTimer();

    this.currentPage.update((page) => {
      return page === 0 ? 1 : 0;
    });
  }


  /* ========================================
     ANTERIOR
     ======================================== */

  protected prev(): void {
    this.resetTimer();

    this.currentPage.update((page) => {
      return page === 0 ? 1 : 0;
    });
  }


  /* ========================================
     INICIAR AUTOPLAY
     ======================================== */

  private startAutoPlay(): void {
    this.stopAutoPlay();

    this.autoPlayTimer = setInterval(() => {
      this.next();
    }, this.intervalMs);
  }


  /* ========================================
     DETENER AUTOPLAY
     ======================================== */

  private stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);

      this.autoPlayTimer = null;
    }
  }


  /* ========================================
     REINICIAR TEMPORIZADOR
     ======================================== */

  private resetTimer(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}