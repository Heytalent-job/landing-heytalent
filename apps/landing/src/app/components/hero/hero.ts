import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BRAND, HERO } from '../../data/site-content';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly brand = BRAND;
  protected readonly hero = HERO;
}
