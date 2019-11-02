import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcquereursRoutingModule } from './acquereurs-routing.module';
import { AcquereurComponent } from './acquereur/acquereur.component';
import { ClientComponent } from './acquereur/client/client.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ConsultantComponent } from './acquereur/consultant/consultant.component';
import { ActiviteComponent } from './acquereur/activite/activite.component';
import { DetailAcquereurComponent } from './acquereur/detail-acquereur/detail-acquereur.component';

@NgModule({
  declarations: [AcquereurComponent, ClientComponent, ConsultantComponent, ActiviteComponent, DetailAcquereurComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    NgxDatatableModule,
    AcquereursRoutingModule
  ],
  exports: [AcquereurComponent, ClientComponent, ConsultantComponent, ActiviteComponent, DetailAcquereurComponent]
})
export class AcquereursModule { }
