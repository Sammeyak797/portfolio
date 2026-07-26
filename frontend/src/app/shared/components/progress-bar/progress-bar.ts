import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="progress-bar" [style.width.%]="progress"></div>`,
  styles: [
    `
      .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: linear-gradient(to right, #00f5c3, #e94560);
        z-index: 9999;
        transition: width 0.1s linear;
        box-shadow: 0 0 8px #00f5c3;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  progress = 0;

  private onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
