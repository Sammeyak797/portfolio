import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  profileJson = `{
    "name": "Sammeyak Wankhade",
    "role": "Full Stack Engineer",
    "company": "Cooee (UK)",
    "cgpa": 8.60,
    "graduating": "June 2026",
    "certifications": [
    "Oracle OCI 2025",
    "Spring Boot 3"
    ],
    "seeking": "Full-time SDE"
  }`;
}
