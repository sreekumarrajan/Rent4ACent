import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as HOME_ACTIONS from '../actions/home';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {HomeService} from '../services/home.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class HomeEffects {
  @Effect()
  load$ = this.actions$
    .ofType(HOME_ACTIONS.RentalSiteActionTypes.LOAD_RENTAL_SITES)
    .switchMap(resource => {
      console.log('fired this action');
      return this.homeService.getRentalSites('Toronto');
    })
    .map(sites => {
      return new HOME_ACTIONS.RentalSiteLoadedAction(sites['items']);
    });

  constructor(
    private actions$: Actions,
    private homeService: HomeService
  ) {}
}
