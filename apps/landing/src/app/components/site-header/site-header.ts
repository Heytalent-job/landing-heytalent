import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BRAND } from '../../data/site-content';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  protected readonly brand = BRAND;
}
