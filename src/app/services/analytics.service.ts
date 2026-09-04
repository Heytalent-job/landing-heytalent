import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private router: Router) {
    this.initializeRouterTracking();
  }

  private initializeRouterTracking(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.pageView(event.urlAfterRedirects);
      });
  }

  /**
   * Track page view
   * @param path - Page path
   */
  pageView(path: string): void {
    gtag('config', 'G-157210631310', {
      page_path: path,
    });
  }

  /**
   * Track custom event
   * @param eventName - Event name
   * @param eventParams - Event parameters
   */
  event(eventName: string, eventParams?: { [key: string]: any }): void {
    gtag('event', eventName, eventParams);
  }

  /**
   * Track form submission
   * @param formName - Name of the form
   */
  trackFormSubmission(formName: string): void {
    this.event('form_submit', { form_name: formName });
  }

  /**
   * Track button click
   * @param buttonName - Name of the button
   */
  trackButtonClick(buttonName: string): void {
    this.event('button_click', { button_name: buttonName });
  }

  /**
   * Track scroll depth
   * @param scrollPercentage - Percentage scrolled (0-100)
   */
  trackScrollDepth(scrollPercentage: number): void {
    this.event('scroll_depth', { scroll_percentage: scrollPercentage });
  }
}
