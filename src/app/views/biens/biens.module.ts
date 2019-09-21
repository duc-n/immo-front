import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiensRoutingModule } from './biens-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CreerBienComponent } from './creer-bien/creer-bien.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';

@NgModule({
  declarations: [CreerBienComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    ReactiveFormsModule,
    NgbModule,
    BiensRoutingModule
  ],
  exports: [CreerBienComponent]
})
export class BiensModule { }
