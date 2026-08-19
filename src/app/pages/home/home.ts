import { Component } from '@angular/core';
import { SiteHeader } from '../../components/site-header/site-header';
import { Hero } from '../../components/hero/hero';
import { Categories } from '../../components/categories/categories';
import { Features } from '../../components/features/features';
import { About } from '../../components/about/about';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-home',
  imports: [
    SiteHeader,
    Hero,
    Categories,
    Features,
    About,
    SiteFooter,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}