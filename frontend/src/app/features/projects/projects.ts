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
        'A production-grade backend service for authenticated URL shortening with Redis caching, analytics tracking, and JWT-secured endpoints.',
      points: [
        'Built scalable backend for authenticated URL shortening and redirection.',
        'Implemented Redis caching with TTL to reduce database hits and improve redirect performance.',
        'Developed analytics APIs to track clicks, timestamps, and user activity.',
        'Secured endpoints using JWT authentication with user-level access control.',
      ],
      stack: ['Flask', 'MongoDB', 'Redis', 'JWT'],
      codeUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'ThinkBoard – Multi-user SaaS Backend',
      period: 'Nov 2025',
      description:
        'A multi-user SaaS backend with REST APIs, Redis rate limiting, optimized MongoDB queries, and JWT-based session management.',
      points: [
        'Designed REST APIs for a multi-user platform supporting secure CRUD operations.',
        'Implemented rate limiting using Redis to handle high-traffic scenarios.',
        'Optimized MongoDB queries to improve response time for read-heavy endpoints.',
        'Integrated JWT-based authentication for secure session management.',
      ],
      stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT'],
      codeUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Real-Time Messaging System',
      period: 'Aug 2025',
      description:
        'A WebSocket-based messaging system achieving sub-100ms latency, containerized with Docker and replacing HTTP polling entirely.',
      points: [
        'Developed WebSocket-based messaging system achieving sub-100ms latency.',
        'Reduced server load by 50% by replacing HTTP polling with persistent connections.',
        'Containerized the application using Docker for consistent deployment environments.',
      ],
      stack: ['Flask', 'WebSockets', 'Docker'],
      codeUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ];
}
