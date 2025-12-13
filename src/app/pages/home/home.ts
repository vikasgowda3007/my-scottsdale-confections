import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
export class Home implements OnInit {
  menuHighlights: HighlightItem[] = [
    // fallback values if the flat file is missing
    { name: 'Red Velvet Dream Cupcake', category: 'Cupcakes' },
    { name: 'Carrot Garden Cake', category: 'Cakes' },
    { name: 'Vanilla Mocha Latte', category: 'Espresso' }
  ];

  loadingHighlights = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadHighlightsFromFile();
  }

  private loadHighlightsFromFile(): void {
    this.http.get<HighlightItem[]>('data/popular-sweets.json').subscribe({
      next: (items) => {
        if (Array.isArray(items) && items.length) {
          this.menuHighlights = items;
        }
        this.loadingHighlights = false;
      },
      error: (err) => {
        console.error('Could not load popular-sweets.json', err);
        this.loadingHighlights = false;
      }
    });
  }
}
