import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercherBienResultComponent } from './rechercher-bien/rechercher-bien-result/rechercher-bien-result.component';
import { BienComponent } from './bien/bien.component';
import { RechercherBienComponent } from './rechercher-bien/rechercher-bien.component';

const routes: Routes = [
  {
    path: 'creer-bien',
    component: BienComponent
  },
  {
    path: 'edit-bien/:id',
    component: BienComponent
  },
  {
    path: 'rechercher-bien',
    component: RechercherBienComponent
  },
  {
    path: 'rechercher-bien-result',
    component: RechercherBienResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiensRoutingModule { }
