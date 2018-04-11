import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONSTANTS} from '../../../app.constants';

@Injectable()
export class LocalizationService {

  constructor(private http: HttpClient) { }

  getTranslationsObject(lang) {
    return this.http.get(APP_CONSTANTS.BASE_URL + lang);
  }

}
