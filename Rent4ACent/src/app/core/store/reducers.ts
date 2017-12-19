import { Action } from '@ngrx/store';
import {IRentalSite, IRentalSiteState} from '../models/rental-site.model';
import {RentalSiteActions, RentalSiteLoadedAction, RentalSiteActionTypes} from './actions';

const initialRentalSiteState: IRentalSiteState = {};

export function RentalSiteReducer (state: IRentalSiteState = initialRentalSiteState , action: RentalSiteActions): IRentalSiteState {
  switch (action.type) {
    case RentalSiteActionTypes.RENTAL_SITE_LOADED:
      const newObject = {};
      newObject[action.payload.id] = action.payload;
      return Object.assign({}, state, newObject );
    default:
      return Object.assign({}, state);
  }
}
