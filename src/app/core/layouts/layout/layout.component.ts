import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as CoreReducers from './../../state/core.reducer';
import * as CoreActions from './../../state/core.actions';
import { getShowSideNavi } from '../../../state/index';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  opened$: Observable<boolean>;

  constructor(
    private store: Store<CoreReducers.State>
  ) {
    this.opened$ = this.store.select(getShowSideNavi);
  }

  ngOnInit() {
  }

  openSideNav() {
    this.store.dispatch(
      new CoreActions.OpenSideNav()
    );
  }

  closeSideNav() {
    this.store.dispatch(
      new CoreActions.CloseSideNav()
    );
  }
}
