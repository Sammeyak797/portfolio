import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="cursor-dot" id="cursorDot"></div>
    <div class="cursor-ring" id="cursorRing"></div>
  `,
  styles: [
    `
      .cursor-dot {
        position: fixed;
        width: 5px;
        height: 5px;
        background: #00f5c3;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px #00f5c3;
        will-change: transform;
        top: 0;
        left: 0;
      }

      .cursor-ring {
        position: fixed;
        width: 28px;
        height: 28px;
        border: 1px solid rgba(0, 245, 195, 0.35);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        will-change: transform;
        top: 0;
        left: 0;
        transition:
          width 0.2s,
          height 0.2s,
          border-color 0.2s;
      }
    `,
  ],
})
export class CursorComponent implements OnInit, OnDestroy {
  private dot!: HTMLElement;
  private ring!: HTMLElement;
  private ringX = 0;
  private ringY = 0;
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
    this.dot = document.getElementById('cursorDot')!;
    this.ring = document.getElementById('cursorRing')!;
    window.addEventListener('mousemove', this.onMouseMove);
    this.animateRing();
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.rafId);
  }

  private animateRing(): void {
    this.ringX += (this.mouseX - this.ringX) * 0.12;
    this.ringY += (this.mouseY - this.ringY) * 0.12;
    this.ring.style.left = `${this.ringX}px`;
    this.ring.style.top = `${this.ringY}px`;
    this.rafId = requestAnimationFrame(() => this.animateRing());
  }
}
