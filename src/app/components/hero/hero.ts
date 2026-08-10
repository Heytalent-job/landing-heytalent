import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STATS, STRIP_IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly stats = STATS;
  protected readonly images = STRIP_IMAGES;
}
