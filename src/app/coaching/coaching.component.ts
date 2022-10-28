import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoachHeroComponent } from './components/coach-hero/coach-hero.component';
import { CoachingNavbarComponent } from './components/coaching-navbar/coaching-navbar.component';
import { CoachingSidebarComponent } from './components/coaching-sidebar/coaching-sidebar.component';

@Component({
  imports: [
    CoachingNavbarComponent,
    RouterModule,
    CoachingSidebarComponent,
    CoachHeroComponent,
  ],
  standalone: true,
  selector: 'app-coaching',
  templateUrl: './coaching.components.html',
})
export class CoachingComponent {}
