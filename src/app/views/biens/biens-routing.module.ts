import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreerBienComponent } from './creer-bien/creer-bien.component';
import { RechercherBienResultComponent } from './rechercher-bien/rechercher-bien-result/rechercher-bien-result.component';

const routes: Routes = [
  {
    path: 'creer-bien',
    component: CreerBienComponent
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
