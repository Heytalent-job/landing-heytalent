import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Projects } from '../../components/projects/projects';
import { About } from '../../components/about/about';
import { Partners } from '../../components/partners/partners';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, About, Partners],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
