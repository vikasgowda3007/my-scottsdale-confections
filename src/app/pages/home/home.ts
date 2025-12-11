import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface HighlightItem {
  name: string;
  category: string;
}

@Component({
  selector: 'msc-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  menuHighlights: HighlightItem[] = [
    { name: 'Red Velvet Dream Cupcake', category: 'Cupcake' },
    { name: 'Carrot Garden Cake', category: 'Cake' },
    { name: 'Vanilla Mocha Latte', category: 'Espresso' }
  ];
}
