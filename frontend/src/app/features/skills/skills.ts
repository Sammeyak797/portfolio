import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Languages',
      icon: 'ti-code',
      skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'],
    },
    {
      category: 'Frontend',
      icon: 'ti-layout',
      skills: ['Angular', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: 'ti-server',
      skills: ['NestJS', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Databases',
      icon: 'ti-database',
      skills: ['MongoDB', 'MySQL', 'Redis'],
    },
    {
      category: 'Tools & DevOps',
      icon: 'ti-tools',
      skills: ['Git', 'GitHub', 'Docker', 'AWS EC2', 'AWS S3', 'Cron Jobs'],
    },
    {
      category: 'Integrations',
      icon: 'ti-plug',
      skills: ['Shopify GraphQL API', 'JWT Auth', 'WebSockets', 'BullMQ', 'Kafka'],
    },
  ];
}
