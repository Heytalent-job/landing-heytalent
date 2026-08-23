import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { CATEGORIES } from '../../data/site-content';

@Component({
  selector: 'app-categories',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  protected readonly categories = CATEGORIES;
}
