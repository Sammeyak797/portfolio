import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="spotlight" id="spotlight"></div>
    <div class="cursor-dot" id="cursorDot"></div>
  `,
  styles: [
    `
      .spotlight {
        position: fixed;
        top: 0;
        left: 0;
        width: 420px;
        height: 420px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        transform: translate(-50%, -50%);
        background: radial-gradient(
          circle,
          rgba(0, 245, 195, 0.045) 0%,
          rgba(0, 245, 195, 0.02) 35%,
          transparent 70%
        );
        transition: opacity 0.3s;
        will-change: left, top;
      }

      .cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 4px;
        height: 4px;
        background: #00f5c3;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        box-shadow:
          0 0 6px #00f5c3,
          0 0 12px rgba(0, 245, 195, 0.4);
        will-change: left, top;
      }
    `,
  ],
})
export class CursorComponent implements OnInit, OnDestroy {
  private spotlight!: HTMLElement;
  private dot!: HTMLElement;
  private spotX = 0;
  private spotY = 0;
  private mouseX = 0;
  private mouseY = 0;
  private rafId!: number;

  private onMouseMove = (e: MouseEvent) => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.dot.style.left = `${e.clientX}px`;
    this.dot.style.top = `${e.clientY}px`;
  };

  ngOnInit(): void {
    this.spotlight = document.getElementById('spotlight')!;
    this.dot = document.getElementById('cursorDot')!;
    window.addEventListener('mousemove', this.onMouseMove);
    this.animateSpotlight();
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.rafId);
  }

  private animateSpotlight(): void {
    this.spotX += (this.mouseX - this.spotX) * 0.08;
    this.spotY += (this.mouseY - this.spotY) * 0.08;
    this.spotlight.style.left = `${this.spotX}px`;
    this.spotlight.style.top = `${this.spotY}px`;
    this.rafId = requestAnimationFrame(() => this.animateSpotlight());
  }
}
