import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONSTANTS} from '../../../app.constants';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getRentalSites(city) {
    return this.http.get(APP_CONSTANTS.BASE_URL + APP_CONSTANTS.URL.SITES + '/' + city );
  }

}
