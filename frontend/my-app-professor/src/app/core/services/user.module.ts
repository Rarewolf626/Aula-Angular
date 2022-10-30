import { catchError, Observable, tap } from 'rxjs';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

const baseUrl = 'http://localhost:3000/user';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {


constructor(private http: HttpClient) {}


save(user: User): Observable<User> {
  return this.http.post<User>(baseUrl, user).pipe(
        tap((itemData: any) => console.log(`added user w/ id=${itemData.id}`)),
        catchError((error: any) => {
          console.error(error);})
        );
  }
}
