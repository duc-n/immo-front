import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiensRoutingModule } from './biens-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RechercherBienComponent } from './rechercher-bien/rechercher-bien.component';
import { RechercherBienResultComponent } from './rechercher-bien/rechercher-bien-result/rechercher-bien-result.component';
import { BienComponent } from './bien/bien.component';
import { ConsultantResponsableComponent } from './bien/consultant-responsable/consultant-responsable.component';
import { DetailBienComponent } from './bien/detail-bien/detail-bien.component';
import { MandatComponent } from './bien/mandat/mandat.component';
import { BailComponent } from './bien/bail/bail.component';
import { ConditionsFinancieresComponent } from './bien/conditions-financieres/conditions-financieres.component';
import { VisiteComponent } from './bien/visite/visite.component';
import { DescriptifComponent } from './bien/descriptif/descriptif.component';
import { CommnunicationComponent } from './bien/commnunication/commnunication.component';
import { SurfaceComponent } from './bien/surface/surface.component';

@NgModule({
  declarations: [BienComponent, ConsultantResponsableComponent, DetailBienComponent,
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
  exports: [BienComponent, ConsultantResponsableComponent, DetailBienComponent,
    MandatComponent, BailComponent, ConditionsFinancieresComponent, VisiteComponent, DescriptifComponent, CommnunicationComponent, SurfaceComponent, RechercherBienComponent, RechercherBienResultComponent]
})
export class BiensModule { }
