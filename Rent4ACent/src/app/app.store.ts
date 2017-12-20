import {RentalSiteReducer} from './core/store/reducers';
import {combineReducers} from 'ngrx/@ngrx/store';

const reducers = {
  rentalSiteReducer: RentalSiteReducer
};

export function AppReducer(state: any, action: any) {
  return combineReducers(reducers);
}
