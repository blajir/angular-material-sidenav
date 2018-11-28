import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  OpenSideNav = '[Core] Open Side Navigation',
  CloseSideNav = '[Core] Close Side Navigation',
}

export class OpenSideNav implements Action {
  readonly type = CoreActionTypes.OpenSideNav;
  public constructor() {}
}

export class CloseSideNav implements Action {
  readonly type = CoreActionTypes.CloseSideNav;
  public constructor() {}
}

export type CoreActions =
  | OpenSideNav
  | CloseSideNav;
