import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const COMP = [ToolbarComponent, MenuComponent];

@NgModule({
  declarations: [COMP],
  imports: [CommonModule, MaterialModule],
  exports: [COMP],
})
export class LayoutModule {}
