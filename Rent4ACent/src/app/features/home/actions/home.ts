import {Action} from '@ngrx/store';
import {IRentalSite} from '../model/rental-site.model';

export const RentalSiteActionTypes = {
  'RENTAL_SITE_LOADED': 'RENTAL_SITE_LOADED'
};

export class RentalSiteLoadedAction implements Action {
  readonly type = RentalSiteActionTypes.RENTAL_SITE_LOADED;
  constructor (public payload: IRentalSite) { }
}

export type Actions = RentalSiteLoadedAction;
