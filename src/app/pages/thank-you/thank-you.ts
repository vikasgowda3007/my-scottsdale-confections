import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'msc-thank-you',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './thank-you.html',
  styleUrl: './thank-you.scss'
})
export class ThankYou {}
