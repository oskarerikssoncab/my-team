import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './coach-hero.component.html',
})
export class CoachHeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
