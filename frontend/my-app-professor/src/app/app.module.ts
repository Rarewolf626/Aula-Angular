import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './core/components/components.module';
import { HeroInsertDialogComponent } from './core/components/hero-insert-dialog/hero-insert-dialog.component';
import { LayoutModule } from './core/layout/layout.module';
import { ServicesModule } from './core/services/services.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ComponentsModule,
    ServicesModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
