import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      year: '2025',
      icon: 'ti-cloud',
      verifyUrl: '#',
    },
    {
      title: 'Spring Framework 6 & Spring Boot 3',
      issuer: 'Udemy',
      year: '2024',
      icon: 'ti-leaf',
      verifyUrl: '#',
    },
  ];
}
