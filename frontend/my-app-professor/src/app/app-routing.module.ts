import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './core/components/hero-detail/hero-detail.component';
import { HeroesComponent } from './core/components/heroes/heroes.component';
import { UserComponent } from './core/components/user/user.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'user', component: UserComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
