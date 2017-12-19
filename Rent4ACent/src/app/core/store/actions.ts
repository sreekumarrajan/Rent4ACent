import {IRentalSite} from '../models/rental-site.model';
import {Action} from 'ngrx/@ngrx/store';

export const RentalSiteActionTypes = {
  'RENTAL_SITE_LOADED': 'RENTAL_SITE_LOADED'
};

export class RentalSiteLoadedAction implements Action {
  type = RentalSiteActionTypes.RENTAL_SITE_LOADED;
  constructor (public payload: IRentalSite) { }
}

export type RentalSiteActions = RentalSiteLoadedAction;
