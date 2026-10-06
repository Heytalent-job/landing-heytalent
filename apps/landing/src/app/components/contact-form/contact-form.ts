import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { Icon } from '@heytalent/ui';
import { CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-contact-form',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  /* ========================================
     REDES DE TANIA
     ======================================== */

  protected readonly taniaInstagram =
    'https://www.instagram.com/taniagr97/';

  protected readonly taniaLinkedin =
    'https://www.linkedin.com/in/tania-gamboa-rojas-14b429145/';

  protected readonly taniaWhatsapp =
    'https://wa.link/nutenw';


  /* ========================================
     REDES DE ADOLFO
     ======================================== */

  protected readonly adolfoInstagram =
    'https://www.instagram.com/adolfo.penafielv/';

  protected readonly adolfoLinkedin =
    'https://www.linkedin.com/in/adolfopenafiel/';

  protected readonly adolfoWhatsapp =
    'https://wa.link/14j6fe';


  /* ========================================
     COMUNIDAD GENERAL
     ======================================== */

  protected readonly communityWhatsapp =
    CONTACT.whatsapp;
}