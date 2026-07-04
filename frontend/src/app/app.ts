import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { SkillsComponent } from './features/skills/skills';
import { ExperienceComponent } from './features/experience/experience';
import { ProjectsComponent } from './features/projects/projects';
import { CertificationsComponent } from './features/certifications/certifications';
import { ContactComponent } from './features/contact/contact';
import { ScrollAnimationService } from './core/services/scroll-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private scrollAnim: ScrollAnimationService) {}

  ngOnInit(): void {
    setTimeout(() => this.scrollAnim.init(), 300);
  }

  ngOnDestroy(): void {
    this.scrollAnim.destroy();
  }
}
