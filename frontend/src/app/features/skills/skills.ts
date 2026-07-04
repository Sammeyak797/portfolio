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
      skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      category: 'frontend',
      skills: ['Angular', 'HTML', 'SCSS', 'Tailwind CSS', 'Streamlit'],
    },
    {
      category: 'backend',
      skills: ['NestJS', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    },
    {
      category: 'ai_ml',
      skills: ['TensorFlow', 'Keras', 'OpenCV', 'CNN', 'RAG', 'LLM Fundamentals'],
    },
    {
      category: 'devops_tools',
      skills: ['Git', 'Docker', 'AWS EC2', 'AWS S3', 'Maven', 'Postman'],
    },
  ];
}
