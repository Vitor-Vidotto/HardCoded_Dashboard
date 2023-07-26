import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaugeAreaComponent } from './gauge-area/gauge-area.component';

const routes: Routes = [
  {path:'',component:GaugeAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
