import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { LINKEDIN_URL, NAV_LINKS, PHONE, WHATSAPP_URL } from '../../data/site-content';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly links = NAV_LINKS;
  protected readonly whatsappUrl = WHATSAPP_URL;
  protected readonly linkedinUrl = LINKEDIN_URL;
  protected readonly phone = PHONE;
  protected readonly year = new Date().getFullYear();
}
