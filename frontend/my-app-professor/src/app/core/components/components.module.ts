import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroInsertDialogComponent } from './hero-insert-dialog/hero-insert-dialog.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserComponent } from './user/user.component';

const COMPONENTS = [
  HeroesComponent,
  HeroDetailComponent,
  HeroInsertDialogComponent,
  UserComponent,

];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,

  ],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
