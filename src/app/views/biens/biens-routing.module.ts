import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercherBienResultComponent } from './rechercher-bien/rechercher-bien-result/rechercher-bien-result.component';
import { BienComponent } from './bien/bien.component';
import { RechercherBienComponent } from './rechercher-bien/rechercher-bien.component';
import { AuthGaurd } from 'src/app/shared/services/auth.gaurd';

const routes: Routes = [
  {
    path: 'creer-bien',
    canActivate: [AuthGaurd],
    component: BienComponent
  },
  {
    path: 'edit-bien/:id',
    canActivate: [AuthGaurd],
    component: BienComponent
  },
  {
    path: 'rechercher-bien',
    canActivate: [AuthGaurd],
    component: RechercherBienComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiensRoutingModule { }
