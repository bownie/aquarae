import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IrrigationComponent } from './irrigation/irrigation.component';
import { routing } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { VineyardComponent } from './vineyard/vineyard.component';

@NgModule({
  declarations: [
    AppComponent,
    IrrigationComponent,
    AgricultureComponent,
    VineyardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiModule,
    routing
    ],
  providers: [],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
