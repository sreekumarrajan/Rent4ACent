import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromHome from './home';

export interface HomeState {
  homeState: fromHome.State;
}

export interface State extends fromRoot.State {
  homeState: HomeState;
};

export const reducers = {
  homeState: fromHome.reducer
};

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectHomePageState = createSelector(
  selectHomeState,
  (state: HomeState) => state.homeState
);

export const selectRentalSites = createSelector(
  selectHomePageState,
  fromHome.getRentalSites
);
