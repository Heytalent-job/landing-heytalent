import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Projects } from '../../components/projects/projects';
import { About } from '../../components/about/about';
import { Partners } from '../../components/partners/partners';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Projects,
    About,
    Partners,
    ContactForm,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}