import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { MarsFieldComponent } from './components/mars-field/mars-field.component';
import { HomeComponent } from './components/home/home.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomAframeComponentsService } from './services/custom-aframe-components.service';

@NgModule({
  declarations: [
    AppComponent,
    SolarSystemComponent,
    MarsFieldComponent,
    HomeComponent,
    NavigatorComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomAframeComponentsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
