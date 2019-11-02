import { Component, OnInit } from '@angular/core';
import { UploadFilePickerAdapter } from '../../services/upload-file-picker.adapter';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  adapter = new UploadFilePickerAdapter(this.http);
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
