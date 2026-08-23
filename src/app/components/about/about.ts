import { Component, ChangeDetectionStrategy, AfterViewInit, ElementRef } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { ABOUT, ABOUT_CARDS, ABOUT_STATS, CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-about',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  protected readonly about = ABOUT;
  protected readonly stats = ABOUT_STATS;
  protected readonly cards = ABOUT_CARDS;
  protected readonly contact = CONTACT;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    this.el.nativeElement
      .querySelectorAll('.animate')
      .forEach((el: Element) => observer.observe(el));
  }
}