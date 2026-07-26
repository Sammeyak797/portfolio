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
      points: [
        'Redis TTL caching reduced DB hits by ~60%',
        'JWT auth with user-level access control',
        'Analytics API tracking clicks and timestamps',
      ],
      stack: ['Flask', 'MongoDB', 'Redis', 'JWT'],
      codeUrl: 'https://github.com/Sammeyak797/url-shortener',
      liveUrl: null,
    },
    {
      title: 'Distributed Job Queue System',
      period: 'Aug 2025',
      description:
        'Distributed task processing with producer-consumer architecture, Redis queues, worker retry handling, and multithreaded execution.',
      points: [
        'Producer-consumer pattern with Redis queues',
        'Retry handling and failure recovery mechanisms',
        'Multithreading improved system throughput',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
      codeUrl: 'https://github.com/Sammeyak797',
      liveUrl: null,
    },
    {
      title: 'Plant Disease Detection System',
      period: 'Aug 2025',
      description:
        'Deep learning CNN model for agricultural plant disease classification with OpenCV preprocessing and Streamlit interface.',
      points: [
        'CNN model trained on agricultural image datasets',
        'OpenCV preprocessing pipeline for feature extraction',
        'Real-time prediction via Streamlit interface',
      ],
      stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Streamlit'],
      codeUrl:
        'https://github.com/Sammeyak797/Plant-Disease-Detection-System-for-Sustainable-Agriculture',
      liveUrl: null,
    },
    {
      title: 'Smart CNC Predictive Maintenance',
      period: 'Nov 2025',
      description:
        'Real-time IoT monitoring for CNC machines with data collection, performance tracking, and predictive maintenance workflows.',
      points: [
        'Real-time data collection from IoT sensors',
        'Predictive maintenance and fault detection',
        'Dashboards for operational insights',
      ],
      stack: ['Python', 'IoT', 'Data Processing'],
      codeUrl: 'https://github.com/Sammeyak797/smart-cnc-predictive-maintenance',
      liveUrl: null,
    },
    {
      title: 'Employee Management System',
      period: 'Jan 2026',
      description:
        'Role-based employee management with layered Spring Boot architecture, Hibernate ORM, and RESTful APIs.',
      points: [
        'Layered architecture: Controller → Service → Repository',
        'Hibernate ORM for efficient DB persistence',
        'Input validation and exception handling',
      ],
      stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
      codeUrl: 'https://github.com/Sammeyak797',
      liveUrl: null,
    },
    {
      title: 'Real-Time Messaging System',
      period: 'Aug 2025',
      description:
        'WebSocket-based messaging achieving sub-100ms latency, reducing server load 50% over HTTP polling.',
      points: [
        'Sub-100ms latency via persistent WebSocket connections',
        '50% server load reduction vs HTTP polling',
        'Containerized with Docker for consistent deployment',
      ],
      stack: ['Flask', 'WebSockets', 'Docker'],
      codeUrl: 'https://github.com/Sammeyak797',
      liveUrl: null,
    },
  ];
}
