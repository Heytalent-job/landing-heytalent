import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Icon } from '@heytalent/ui';
import { BRAND, CONTACT, FOOTER_COLUMNS } from '../../data/site-content';

@Component({
  selector: 'app-site-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly brand = BRAND;
  protected readonly columns = FOOTER_COLUMNS;

  protected readonly linkedinUrl = CONTACT.linkedin;
  protected readonly instagramUrl = CONTACT.instagram;
  
  protected readonly year = new Date().getFullYear();
}
