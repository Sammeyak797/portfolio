import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
  ];

  menuOpen = false;
  isScrolled = false;
  activeSection = '';

  texts = [
    'build digital experiences.',
    'build things for the web.',
    'solve real-world problems.',
    'love innovation.',
  ];
  displayedText = '';
  private textIndex = 0;
  private charIndex = 0;
  private reverse = false;
  private timer: any;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  ngOnInit(): void {
    this.runTypewriter();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private runTypewriter(): void {
    const current = this.texts[this.textIndex];

    if (!this.reverse && this.charIndex === current.length + 1) {
      this.timer = setTimeout(() => {
        this.reverse = true;
        this.runTypewriter();
      }, 1000);
      return;
    }

    if (this.reverse && this.charIndex === 0) {
      this.reverse = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.runTypewriter();
      return;
    }

    this.charIndex += this.reverse ? -1 : 1;
    this.displayedText = current.substring(0, this.charIndex);
    this.timer = setTimeout(() => this.runTypewriter(), this.reverse ? 40 : 80);
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMenu();
  }

  updateActiveSection(): void {
    const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
    const scrollY = window.scrollY + 120;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          this.activeSection = id;
          return;
        }
      }
    }
    if (window.scrollY < 100) this.activeSection = '';
  }
}
