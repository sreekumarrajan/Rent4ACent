import {IRentalSite} from '../model/rental-site.model';
import * as home from '../actions/home';

export interface State {
  rentalSite: Array<IRentalSite>;
}

export const initialState: State = {
  rentalSite: new Array<IRentalSite>()
};

export function reducer(state = initialState, action: home.Actions): State {
  switch (action.type) {
    case home.RentalSiteActionTypes.RENTAL_SITE_LOADED:
      const newState = Object.assign({}, state);
      newState.rentalSite.push(action.payload);
      return newState;
    default:
      return Object.assign({}, state);
  }
}

export const getRentalSites = (state: State) => state.rentalSite ;
