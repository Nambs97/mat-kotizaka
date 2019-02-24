import {NgModule} from '@angular/core';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

import {
  MatSlideToggleModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRippleModule,
    ObserversModule,
    PlatformModule,
    MatToolbarModule
  ]
})
export class CustomMaterialModule {}
