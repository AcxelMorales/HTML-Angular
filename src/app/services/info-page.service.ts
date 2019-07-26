import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IInfoPage } from '../models/IInfoPage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: IInfoPage = {};
  load: boolean = false;

  constructor(private http: HttpClient) {
    this.getInfo();
  }

  private getInfo(): void {
    this.http.get('assets/data/data-page.json')
      .subscribe((data: IInfoPage) => {
        this.load = true;
        this.info = data;
      });
  }

  public getData(): Observable<Object> {
    return this.http.get('https://portafolio-angular-94474.firebaseio.com/crew.json');
  }

}
