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

@NgModule({
  declarations: [CreerBienComponent, BienFormComponent, ConsultantResponsableComponent, DetailBienComponent, MandatComponent, BailComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    ReactiveFormsModule,
    NgbModule,
    BiensRoutingModule
  ],
  exports: [CreerBienComponent, BienFormComponent, ConsultantResponsableComponent, DetailBienComponent, MandatComponent, BailComponent]
})
export class BiensModule { }
