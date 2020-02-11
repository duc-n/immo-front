import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcquereurComponent } from './acquereur/acquereur.component';


const routes: Routes = [
  {
    path: 'creer-acquereur',
    component: AcquereurComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquereursRoutingModule { }
