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
  highlights = [
    { icon: 'ti-building', label: 'Currently at', value: 'Cooee, UK' },
    { icon: 'ti-school', label: 'Education', value: 'B.E. IT — 8.60 CGPA' },
    { icon: 'ti-map-pin', label: 'Location', value: 'Pune, India' },
    { icon: 'ti-certificate', label: 'Certified', value: 'Oracle OCI 2025' },
  ];
}
