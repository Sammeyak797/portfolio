import { Component, ElementRef, ViewChild, OnInit, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
})
export class TerminalComponent implements OnInit, AfterViewChecked {
  @ViewChild('terminalBody') terminalBody!: ElementRef;
  @ViewChild('termInput') termInput!: ElementRef;

  input = '';
  history: { type: 'cmd' | 'output' | 'error' | 'blank'; text: string }[] = [];
  cmdHistory: string[] = [];
  cmdIndex = -1;
  private shouldScroll = false;

  private commands: Record<string, () => string[]> = {
    help: () => [
      '  COMMAND       → DESCRIPTION',
      '  ──────────────────────────────',
      '  whoami        → about me',
      '  skills        → tech stack',
      '  experience    → work history',
      '  projects      → my builds',
      '  contact       → get in touch',
      '  resume        → open resume',
      '  clear         → clear screen',
      '  exit          → scroll to top',
      '  ──────────────────────────────',
    ],
    whoami: () => [
      '> Sammeyak Wankhade',
      '> Software Engineer Intern @ Cooee (UK)',
      '> B.E. IT — Sinhgad College of Engineering, Pune',
      '> CGPA: 8.60 | Graduating: June 2026',
      '> Stack: Java · TypeScript · Python · NestJS · Angular',
      '> Status: open to full-time SDE roles',
    ],
    skills: () => [
      '── Languages ──────────────────────────',
      '  Java · TypeScript · Python · JavaScript · SQL',
      '── Backend ────────────────────────────',
      '  NestJS · Spring Boot · Node.js · GraphQL · REST',
      '── Frontend ───────────────────────────',
      '  Angular · HTML · SCSS · Tailwind CSS',
      '── Databases ──────────────────────────',
      '  MongoDB · MySQL · PostgreSQL · Redis',
      '── AI / ML ────────────────────────────',
      '  TensorFlow · Keras · OpenCV · Streamlit',
      '── DevOps ─────────────────────────────',
      '  Docker · AWS · Git · Maven · Postman',
    ],
    experience: () => [
      '> Software Engineer Intern @ Cooee (UK)',
      '  Feb 2026 – Present',
      '  ├── NestJS · Angular · MongoDB · TypeScript',
      '  ├── Shopify GraphQL API integrations',
      '  ├── Cron-based automation workflows',
      '  ├── 50+ feature enhancements for enterprise clients',
      '  └── Processed 1000+ merchant records',
    ],
    projects: () => [
      '01. Scalable URL Shortener with Analytics',
      '    Flask · MongoDB · Redis · JWT',
      '    → github.com/Sammeyak797/url-shortener',
      '',
      '02. Smart CNC Predictive Maintenance',
      '    Python · IoT · Data Processing',
      '    → github.com/Sammeyak797/smart-cnc-predictive-maintenance',
      '',
      '03. Plant Disease Detection System',
      '    TensorFlow · Keras · OpenCV · Streamlit',
      '    → github.com/Sammeyak797/Plant-Disease-Detection-System-for-Sustainable-Agriculture',
      '',
      '04. Distributed Job Queue System',
      '    Java · Spring Boot · PostgreSQL · Redis',
      '',
      '05. Real-Time Messaging System',
      '    Flask · WebSockets · Docker',
    ],
    contact: () => [
      '> email    → wankhadesammeyak@gmail.com',
      '> linkedin → linkedin.com/in/sammeyak-wankhade',
      '> github   → github.com/Sammeyak797',
      '> portfolio→ sammeyak-portfolio.netlify.app',
    ],
    resume: () => {
      window.open('assets/resume/Sammeyak_Wankhade_Resume.pdf', '_blank');
      return ['> opening resume.pdf...'];
    },
    clear: () => {
      this.history = [];
      return [];
    },
    exit: () => {
      const section = document.getElementById('terminal-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      return ['> closing terminal... bye 👋'];
    },
  };

  ngOnInit(): void {
    this.printLines([
      '  sammeyak@portfolio ~ %',
      '  ──────────────────────────────',
      '  Software Engineer · Full Stack',
      '  Backend · AI/ML · Cooee (UK)',
      '  Open to SDE roles',
      '  ──────────────────────────────',
      '  Type "help" to get started.',
      '',
    ]);
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollBottom();
      this.shouldScroll = false;
    }
  }

  private printLines(lines: string[]): void {
    for (const line of lines) {
      this.history.push({ type: 'output', text: line });
    }
    this.shouldScroll = true;
  }

  onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.cmdIndex < this.cmdHistory.length - 1) {
        this.cmdIndex++;
        this.input = this.cmdHistory[this.cmdHistory.length - 1 - this.cmdIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.cmdIndex > 0) {
        this.cmdIndex--;
        this.input = this.cmdHistory[this.cmdHistory.length - 1 - this.cmdIndex];
      } else {
        this.cmdIndex = -1;
        this.input = '';
      }
    }
  }

  runCommand(): void {
    const cmd = this.input.trim().toLowerCase();
    if (!cmd) return;

    this.history.push({ type: 'cmd', text: `$ ${cmd}` });
    this.cmdHistory.push(cmd);
    this.cmdIndex = -1;
    this.input = '';

    if (this.commands[cmd]) {
      const output = this.commands[cmd]();
      this.printLines(output);
    } else {
      this.history.push({
        type: 'error',
        text: `command not found: ${cmd} — type "help" for commands`,
      });
      this.shouldScroll = true;
    }
  }

  focusInput(): void {
    this.termInput?.nativeElement?.focus();
  }

  private scrollBottom(): void {
    if (this.terminalBody?.nativeElement) {
      this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
    }
  }
}
