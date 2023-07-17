import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';

/**
 * Import and Export all Material components for easy maintenance
 * 
 */
@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,

  ],
  declarations: [
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,

  ]
})
export class MaterialModule { }