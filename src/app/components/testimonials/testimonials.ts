import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS } from '../../data/site-content';

@Component({
  selector: 'app-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
}
