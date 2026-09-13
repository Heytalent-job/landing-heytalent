import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Icon } from '@heytalent/ui';
import { FEATURES } from '../../data/site-content';

@Component({
  selector: 'app-features',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  protected readonly features = FEATURES;
}
