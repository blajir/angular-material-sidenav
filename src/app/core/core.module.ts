import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layouts/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './state';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forFeature('core', fromCore.reducers, { metaReducers: fromCore.metaReducers })
  ],
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
