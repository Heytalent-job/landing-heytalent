import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BRAND, FOOTER_COLUMNS } from '../../data/site-content';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly brand = BRAND;
  protected readonly columns = FOOTER_COLUMNS;
  protected readonly year = new Date().getFullYear();
}
