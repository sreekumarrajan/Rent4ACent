import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONSTANTS} from '../../app.constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeaderService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get(APP_CONSTANTS.BASE_URL + APP_CONSTANTS.URL.CITIES);
  }
}
