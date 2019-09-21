import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreerBienComponent } from './creer-bien/creer-bien.component';

const routes: Routes = [
  {
    path: 'creer-bien',
    component: CreerBienComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiensRoutingModule { }
