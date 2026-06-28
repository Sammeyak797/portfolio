import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  currentYear = new Date().getFullYear();
  links = [
    {
      label: 'Email',
      value: 'wankhadesammeyak@gmail.com',
      href: 'mailto:wankhadesammeyak@gmail.com',
      icon: 'ti-mail',
    },
    {
      label: 'GitHub',
      value: 'github.com/Sammeyak797',
      href: 'https://github.com/Sammeyak797',
      icon: 'ti-brand-github',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sammeyak-wankhade',
      href: 'https://linkedin.com/in/sammeyak-wankhade',
      icon: 'ti-brand-linkedin',
    },
  ];
}
