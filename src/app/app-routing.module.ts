import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { MarsFieldComponent } from './components/mars-field/mars-field.component';
import { HomeComponent } from './components/home/home.component';

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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
