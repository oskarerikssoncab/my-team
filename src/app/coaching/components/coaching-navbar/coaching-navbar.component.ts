import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  imports: [MatToolbarModule],

  selector: 'app-coaching-navbar',
  templateUrl: './coaching-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CoachingNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
