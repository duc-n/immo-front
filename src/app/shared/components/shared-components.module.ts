import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnLoadingComponent } from './btn-loading/btn-loading.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { SearchModule } from './search/search.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutsModule } from './layouts/layouts.module';
import { ClientFormModalComponent } from './client-form-modal/client-form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommercialFormModalComponent } from './commercial-form-modal/commercial-form-modal.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { BienDatatableComponent } from './bien-datatable/bien-datatable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxGalleryModule } from 'ngx-gallery';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutsModule,
    SharedPipesModule,
    SharedDirectivesModule,
    SearchModule,
    PerfectScrollbarModule,
    NgbModule,
    FormsModule,
    FilePickerModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgxGalleryModule,
    RxReactiveFormsModule
  ],
  declarations: [BtnLoadingComponent, FeatherIconComponent, ClientFormModalComponent, CommercialFormModalComponent, FileUploadComponent, BienDatatableComponent],
  exports: [BtnLoadingComponent, FeatherIconComponent, ReactiveFormsModule, FileUploadComponent, BienDatatableComponent, NgxGalleryModule],
  entryComponents: [ClientFormModalComponent, CommercialFormModalComponent]
})
export class SharedComponentsModule { }
