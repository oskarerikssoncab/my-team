import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-index',
  template: ` <a routerLink="/coaching"> go to coaching123</a> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
