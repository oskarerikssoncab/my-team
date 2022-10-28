import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  filter,
  map,
  Observable,
  Subject,
  takeUntil,
  tap,
  distinctUntilChanged,
  distinct,
} from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coaching-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatExpansionModule,
    CommonModule,
  ],
  templateUrl: './coaching-sidebar.component.html',
})
export class CoachingSidebarComponent {
  destroyed$ = new Subject();

  constructor() {}
}
