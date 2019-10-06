import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiensRoutingModule } from './biens-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CreerBienComponent } from './creer-bien/creer-bien.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { BienFormComponent } from './creer-bien/bien-form/bien-form.component';
import { ConsultantResponsableComponent } from './creer-bien/consultant-responsable/consultant-responsable.component';
import { DetailBienComponent } from './creer-bien/detail-bien/detail-bien.component';
import { MandatComponent } from './creer-bien/mandat/mandat.component';
import { BailComponent } from './creer-bien/bail/bail.component';
import { ConditionsFinancieresComponent } from './creer-bien/conditions-financieres/conditions-financieres.component';
import { VisiteComponent } from './creer-bien/visite/visite.component';
import { DescriptifComponent } from './creer-bien/descriptif/descriptif.component';
import { CommnunicationComponent } from './creer-bien/commnunication/commnunication.component';
import { SurfaceComponent } from './creer-bien/surface/surface.component';

@NgModule({
  declarations: [CreerBienComponent, BienFormComponent, ConsultantResponsableComponent, DetailBienComponent, MandatComponent, BailComponent, ConditionsFinancieresComponent, VisiteComponent, DescriptifComponent, CommnunicationComponent, SurfaceComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    ReactiveFormsModule,
    NgbModule,
    BiensRoutingModule
  ],
  exports: [CreerBienComponent, BienFormComponent, ConsultantResponsableComponent, DetailBienComponent, MandatComponent, BailComponent, ConditionsFinancieresComponent, VisiteComponent, DescriptifComponent, CommnunicationComponent, SurfaceComponent]
})
export class BiensModule { }
