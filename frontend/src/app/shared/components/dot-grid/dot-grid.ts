import { Component } from '@angular/core';

@Component({
  selector: 'app-dot-grid',
  standalone: true,
  template: `<div class="dot-grid"></div>`,
  styles: [
    `
      .dot-grid {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        background-image: radial-gradient(circle, rgba(0, 245, 195, 0.08) 1px, transparent 1px);
        background-size: 32px 32px;
        mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        -webkit-mask-image: radial-gradient(
          ellipse 80% 80% at 50% 50%,
          black 40%,
          transparent 100%
        );
        animation: gridFloat 8s ease-in-out infinite;
      }

      @keyframes gridFloat {
        0%,
        100% {
          background-position: 0 0;
        }
        50% {
          background-position: 16px 16px;
        }
      }
    `,
  ],
})
export class DotGridComponent {}
