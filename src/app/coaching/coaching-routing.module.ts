import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './tools/foods/foods.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./coaching.component').then((c) => c.CoachingComponent),
    children: [
      {
        path: 'coaching/tools/foods',
        component: FoodsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachingRoutingModule {}
