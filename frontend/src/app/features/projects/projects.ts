import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Scalable URL Shortener with Analytics',
      period: 'Jan 2026',
      description:
        'Production-grade backend for authenticated URL shortening with Redis TTL caching, click analytics tracking, and JWT-secured endpoints.',
      stack: ['Flask', 'MongoDB', 'Redis', 'JWT'],
      codeUrl: 'https://github.com/Sammeyak797/url-shortener',
      liveUrl: null,
    },
    {
      title: 'Smart CNC Predictive Maintenance',
      period: 'Nov 2025',
      description:
        'Real-time monitoring solution for CNC machines with data collection, performance tracking, predictive maintenance workflows, and operational dashboards.',
      stack: ['Python', 'IoT', 'Data Processing'],
      codeUrl: 'https://github.com/Sammeyak797/smart-cnc-predictive-maintenance',
      liveUrl: null,
    },
    {
      title: 'Plant Disease Detection System',
      period: 'Aug 2025',
      description:
        'Deep learning CNN model for plant disease classification from images. Trained on agricultural datasets with OpenCV preprocessing and a Streamlit interface for real-time prediction.',
      stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Streamlit'],
      codeUrl:
        'https://github.com/Sammeyak797/Plant-Disease-Detection-System-for-Sustainable-Agriculture',
      liveUrl: null,
    },
    {
      title: 'ThinkBoard — Multi-user SaaS Backend',
      period: 'Nov 2025',
      description:
        'REST API platform with Redis rate limiting, optimized MongoDB queries for read-heavy endpoints, and JWT session management.',
      stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT'],
      codeUrl: 'https://github.com/Sammeyak797',
      liveUrl: null,
    },
  ];
}
