import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-plan-creator',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>meal-plan-creator works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlanCreatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
