import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCore from './layout.reducer';

export interface State {

  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {

  core: fromCore.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
