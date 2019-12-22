import { FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpRequest, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { environment } from 'src/environments/environment';
import { REST_URLS } from '../constants/rest-urls';
import { ActivatedRoute } from '@angular/router';
import { RouteStateService } from './route-state.service';

export class UploadFilePickerAdapter extends FilePickerAdapter {

    private apiUrl: string;

    constructor(private http: HttpClient,
        private routeStateService: RouteStateService) {
        super();
        this.apiUrl = environment.api_url;

    }
    public uploadFile(fileItem: FilePreviewModel) {
        const form = new FormData();
        const id = this.routeStateService.idBienValue;

        form.append('fileParts', fileItem.file);
        const api = this.apiUrl + REST_URLS.FILE_UPLOAD.replace(':id', id);
        const req = new HttpRequest('POST', api, form, { reportProgress: true });
        return this.http.request(req)
            .pipe(
                map((res: HttpEvent<any>) => {
                    if (res.type === HttpEventType.Response) {
                        return res.body.id.toString();
                    } else if (res.type === HttpEventType.UploadProgress) {
                        // Compute and show the % done:
                        const UploadProgress = +Math.round((100 * res.loaded) / res.total);
                        return UploadProgress;
                    }
                })
            );
    }
    public removeFile(fileItem: FilePreviewModel): Observable<any> {
        const removeApi = this.apiUrl + REST_URLS.FILE_DELETE;

        return this.http.post(removeApi, fileItem);
    }
}
