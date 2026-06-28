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
      type: 'Full Stack',
      location: 'UK-based Startup · Remote',
      period: 'Feb 2026 – Present',
      current: true,
      points: [
        'Developed and maintained production features using NestJS, Angular, MongoDB, and TypeScript in a full-stack environment.',
        'Implemented a cron-based bundle generation system running at 30-minute intervals to automate data processing workflows.',
        'Integrated Shopify GraphQL APIs to extract and persist store metadata including address and country information.',
        'Executed database migration scripts to ensure data consistency across evolving schemas.',
        'Resolved critical bugs including trial extension failures and incorrect revenue calculations in admin dashboards.',
        'Delivered 50+ UI improvements for enterprise clients, enhancing usability and user experience.',
        'Built new features including a summary table row to improve data visibility and reporting.',
      ],
      stack: ['NestJS', 'Angular', 'MongoDB', 'TypeScript', 'Shopify GraphQL', 'AWS'],
    },
  ];
}
