import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { HeroInsertDialogComponent } from '../hero-insert-dialog/hero-insert-dialog.component';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  id?: number;
  name?: string;
  dataSource: Hero[] = [];
  //clickedRows = new Set<Hero>();

  @ViewChild(MatTable) table!: MatTable<Hero>;

  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(private heroService: HeroService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.dataSource = [...this.heroService.getHeroes()];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HeroInsertDialogComponent, {
      width: '350px',
      data: { id: this.id, name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        let id = this.heroService.maxId() + 1;
        let hero: Hero = { id: id, name: result };
        // const randomElementIndex = Math.max(
        //  this.dataSource.id
        // );
        this.heroService.addHero(hero).subscribe((heros) => {
          console.log(heros);
          this.dataSource = heros;
        });

        this.table.renderRows();
      }
    });
  }
}
