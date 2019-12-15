import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
  })

export class FileService {
  private apiURL = '/documents/uploadDocument';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);

    const req = new HttpRequest('POST', this.apiURL, data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }
/*
  uploadMultiFile(filelist: FileList): Observable<HttpEvent<{}>> {
    for (let j = 0; j < filelist.length; j++) {
    const multiformdata: FormData = new FormData();
    multiformdata.append('file', filelist[j]);
    const req = new HttpRequest('POST', 'localhost:8080/uploadMultipleDocuments', multiformdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
  }*/

}
