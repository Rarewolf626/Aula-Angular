import { Component, Inject, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-hero-insert-dialog',
  templateUrl: './hero-insert-dialog.component.html',
  styleUrls: ['./hero-insert-dialog.component.css'],
})
export class HeroInsertDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HeroInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
