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
      category: 'languages',
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 78 },
      ],
    },
    {
      category: 'frontend',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'HTML', level: 90 },
        { name: 'SCSS', level: 82 },
        { name: 'Tailwind CSS', level: 78 },
      ],
    },
    {
      category: 'backend',
      skills: [
        { name: 'NestJS', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Spring Boot', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 72 },
      ],
    },
    {
      category: 'databases',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 72 },
        { name: 'Redis', level: 78 },
      ],
    },
    {
      category: 'ai_ml',
      skills: [
        { name: 'TensorFlow', level: 70 },
        { name: 'Keras', level: 68 },
        { name: 'OpenCV', level: 65 },
        { name: 'RAG / LLMs', level: 60 },
      ],
    },
    {
      category: 'devops_tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 72 },
        { name: 'AWS', level: 65 },
        { name: 'Postman', level: 88 },
      ],
    },
  ];
}
