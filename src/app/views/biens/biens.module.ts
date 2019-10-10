import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiensRoutingModule } from './biens-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CreerBienComponent } from './creer-bien/creer-bien.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { ConsultantResponsableComponent } from './creer-bien/consultant-responsable/consultant-responsable.component';
import { DetailBienComponent } from './creer-bien/detail-bien/detail-bien.component';
import { MandatComponent } from './creer-bien/mandat/mandat.component';
import { BailComponent } from './creer-bien/bail/bail.component';
import { ConditionsFinancieresComponent } from './creer-bien/conditions-financieres/conditions-financieres.component';
import { VisiteComponent } from './creer-bien/visite/visite.component';
import { DescriptifComponent } from './creer-bien/descriptif/descriptif.component';
import { CommnunicationComponent } from './creer-bien/commnunication/commnunication.component';
import { SurfaceComponent } from './creer-bien/surface/surface.component';
import { RechercherBienComponent } from './rechercher-bien/rechercher-bien.component';
import { RechercherBienResultComponent } from './rechercher-bien/rechercher-bien-result/rechercher-bien-result.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [CreerBienComponent, ConsultantResponsableComponent, DetailBienComponent,
    MandatComponent, BailComponent, ConditionsFinancieresComponent, VisiteComponent, DescriptifComponent, CommnunicationComponent, SurfaceComponent, RechercherBienComponent, RechercherBienResultComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    NgxDatatableModule,
    BiensRoutingModule
  ],
  exports: [CreerBienComponent, ConsultantResponsableComponent, DetailBienComponent,
    MandatComponent, BailComponent, ConditionsFinancieresComponent, VisiteComponent, DescriptifComponent, CommnunicationComponent, SurfaceComponent, RechercherBienComponent, RechercherBienResultComponent]
})
export class BiensModule { }
