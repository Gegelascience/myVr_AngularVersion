import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { MarsFieldComponent } from './components/mars-field/mars-field.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EartArComponent } from './components/eart-ar/eart-ar.component';

const routes: Routes = [
  {
    path: 'solar',
    component: SolarSystemComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'field',
    component: MarsFieldComponent
  },
  {
    path: 'earth',
    component: EartArComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
