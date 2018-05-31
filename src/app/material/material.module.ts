import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatDividerModule,
         MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatMenuModule,
            MatIconModule,
            MatDividerModule,
            MatToolbarModule]
})
export class MaterialModule { }
