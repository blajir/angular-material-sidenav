import { Action } from '@ngrx/store';
import { CoreActions, CoreActionTypes } from './layout.actions';

export interface State {
  isShowSideNav: boolean;
}

export const initialState: State = {
  isShowSideNav: false
};

export function reducer(state = initialState, action: CoreActions): State {
  switch (action.type) {
    case CoreActionTypes.OpenSideNav:
      return {isShowSideNav: true};

    case CoreActionTypes.CloseSideNav:
      return {isShowSideNav: false};

    default:
      return state;
  }
}

export const getShowSideNav = (state: State) => state.isShowSideNav;
