import {Action} from '@ngrx/store';
import {IRentalSite} from '../model/rental-site.model';

export const RentalSiteActionTypes = {
  'RENTAL_SITE_LOADED': 'RENTAL_SITE_LOADED',
  'LOAD_RENTAL_SITES': 'LOAD_RENTAL_SITES'
};

export class RentalSiteLoadedAction implements Action {
  readonly type = RentalSiteActionTypes.RENTAL_SITE_LOADED;
  constructor (public payload: any) {
    console.log('came iin here', payload);
  }
}

export class LoadRentalSiteAction implements Action {
  readonly type = RentalSiteActionTypes.LOAD_RENTAL_SITES;
  constructor () { }
}

export type Actions =
  | RentalSiteLoadedAction;
