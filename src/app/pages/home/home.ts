import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Categories } from '../../components/categories/categories';
import { Features } from '../../components/features/features';
import { About } from '../../components/about/about';

@Component({
  selector: 'app-home',
  imports: [Hero, Categories, Features, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
