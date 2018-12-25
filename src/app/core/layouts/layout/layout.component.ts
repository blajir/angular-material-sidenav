import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as CoreReducers from '../../state/layout.reducer';
import * as CoreActions from '../../state/layout.actions';
import { getShowSideNavi } from '../../../state/index';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  opened$: Observable<boolean>;

  constructor(
    private store: Store<CoreReducers.State>,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.opened$ = this.store.pipe(select(getShowSideNavi));
    this.iconRegistry.addSvgIcon(
      'hoge',
      this.sanitizer.bypassSecurityTrustResourceUrl('src/assets/twotone-picture_as_pdf-24px.svg'));
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
