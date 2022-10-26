import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';

const baseUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  //--------------------------------------------
  // getHero(id: number): Hero {

  //   return this.HEROES[id];
  // }
  //--------------------------------------------
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(baseUrl);
  }
  //--------------------------------------------
  // addHero(hero: Hero): Observable<Hero[]> {
  //   // this.maxId();
  //   this.HEROES.push(hero); // adicionando na lista
  //   console.log('adding hero..');
  //   // console.log(hero.name);
  //   return of(this.HEROES);
  // }
  // //--------------------------------------------
  // removeHero(hero: Hero): Observable<Hero[]> {
  //   let heros = this.HEROES.filter((h) => hero.name !== h.name);
  //   return of(heros);
  // }
  // //--------------------------------------------
  // maxId(): number {
  //   const ids = this.HEROES.map((hero) => hero.id) as any;
  //   return Math.max(...ids);
  // }
}
