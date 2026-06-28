import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  techStack = ['NestJS', 'Angular', 'TypeScript', 'MongoDB', 'AWS'];

  stats = [
    { num: '50+', label: 'UI Fixes' },
    { num: '3', label: 'Projects' },
    { num: '8.6', label: 'CGPA' },
  ];

  navLinks = ['About', 'Experience', 'Projects', 'Contact'];
}
