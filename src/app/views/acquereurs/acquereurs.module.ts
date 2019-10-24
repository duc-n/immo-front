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

@NgModule({
  declarations: [AcquereurComponent, ClientComponent],
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
  exports: [AcquereurComponent, ClientComponent]
})
export class AcquereursModule { }
