import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCore from '../core/state/core.reducer';

export interface State {
  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getShowSideNavFeatureState = createFeatureSelector<State>('core');
export const getShowSideNavigation = createSelector(getShowSideNavFeatureState, s => s.core);
export const getShowSideNavi = createSelector(getShowSideNavigation, fromCore.getShowSideNav);
