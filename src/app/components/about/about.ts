import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_CARDS, PILLARS } from '../../data/site-content';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly cards = ABOUT_CARDS;
  protected readonly pillars = PILLARS;
}
