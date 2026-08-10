import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteHeader } from './components/site-header/site-header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Testimonials } from './components/testimonials/testimonials';
import { Signup } from './components/signup/signup';
import { SiteFooter } from './components/site-footer/site-footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SiteHeader, Hero, About, Services, HowItWorks, Testimonials, Signup, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
