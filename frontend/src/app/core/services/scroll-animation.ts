import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  private observer!: IntersectionObserver;

  init(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    this.observe();
  }

  observe(): void {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => this.observer.observe(el));
  }

  destroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
