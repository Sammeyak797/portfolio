import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Cooee',
      type: 'Full Stack · Remote · UK',
      period: 'Feb 2026 – Present',
      current: true,
      points: [
        'Developed backend services and REST APIs for production applications serving enterprise clients.',
        'Implemented cron-based bundle generation at 30-min intervals to automate data workflows.',
        'Integrated Shopify GraphQL APIs to extract and persist store metadata.',
        'Executed 15+ database migration scripts and optimized aggregation pipelines improving reporting by 30%.',
        'Resolved critical production bugs — trial extension failures, revenue calculation errors.',
        'Delivered 50+ UI improvements and new features for enterprise clients.',
        'Processed and analyzed data from 1000+ merchant records via Shopify API integrations.',
      ],
      stack: ['NestJS', 'Angular', 'MongoDB', 'TypeScript', 'GraphQL', 'AWS', 'Cron Jobs'],
    },
  ];
}
