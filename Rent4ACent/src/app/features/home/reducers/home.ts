import {IRentalSite} from '../model/rental-site.model';
import * as home from '../actions/home';

export interface State {
  rentalSite: Array<IRentalSite>;
}

export const initialState: State = {
  rentalSite: null
};

export function reducer(state = initialState, action: home.Actions): State {
  switch (action.type) {
    case home.RentalSiteActionTypes.RENTAL_SITE_LOADED:
      const newObject = {};
      newObject[action.payload.id] = action.payload;
      return Object.assign({}, state, newObject);
    default:
      return Object.assign({}, state);
  }
}
