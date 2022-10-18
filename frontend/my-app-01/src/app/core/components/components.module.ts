import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroInsertDialogComponent } from './hero-insert-dialog/hero-insert-dialog.component';
import { HeroesComponent } from './heroes/heroes.component';

const COMPONENTS = [
  HeroesComponent,
  HeroInsertDialogComponent,
  HeroDetailComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
