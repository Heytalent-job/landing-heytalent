import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { ABOUT, ABOUT_CARDS, ABOUT_STATS, CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-about',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly about = ABOUT;
  protected readonly stats = ABOUT_STATS;
  protected readonly cards = ABOUT_CARDS;
  protected readonly contact = CONTACT;
}
