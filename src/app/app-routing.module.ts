import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolarSystemComponent } from "./components/solar-system/solar-system.component";
import { MarsFieldComponent } from "./components/mars-field/mars-field.component";

const routes: Routes = [
  {
    path:"solar",
    component:SolarSystemComponent
  },
  {
    path:"field",
    component:MarsFieldComponent
  },
  {
    path:"",
    redirectTo:"/solar",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
