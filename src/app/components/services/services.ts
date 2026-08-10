import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { SERVICES } from '../../data/site-content';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = SERVICES;
}
