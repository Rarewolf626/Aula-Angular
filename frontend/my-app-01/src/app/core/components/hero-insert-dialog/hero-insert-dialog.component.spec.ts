import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInsertDialogComponent } from './hero-insert-dialog.component';

describe('HeroInsertDialogComponent', () => {
  let component: HeroInsertDialogComponent;
  let fixture: ComponentFixture<HeroInsertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInsertDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroInsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
