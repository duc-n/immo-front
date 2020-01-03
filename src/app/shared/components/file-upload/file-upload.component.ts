import { Component, OnInit } from '@angular/core';
import { UploadFilePickerAdapter } from '../../services/upload-file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { RouteStateService } from '../../services/route-state.service';
import { UploaderCaptions, FilePreviewModel } from 'ngx-awesome-uploader';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  photoFiles: FilePreviewModel[] = [];

  adapter = new UploadFilePickerAdapter(this.http, this.routeStateService);

  captions: UploaderCaptions = {
    dropzone: {
      title: 'Glisser ou déposer un fichier ici',
      or: 'Ou',
      browse: 'Parcourir un fichier'
    },
    cropper: {
      crop: 'Crop',
      cancel: 'Annuler'
    },
    previewCard: {
      remove: 'Supprimer',
      uploadError: 'Erreur lors d\'upload un fichier'
    }
  };

  constructor(private http: HttpClient, private routeStateService: RouteStateService) { }

  ngOnInit() {
  }

  onUploadSuccess(e: FilePreviewModel) {
    console.log(e);
    const fileUrl = e.fileId;
    console.log(this.photoFiles);
  }
  onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
    this.photoFiles.push(file);
  }

}
