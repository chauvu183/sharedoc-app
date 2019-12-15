import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,HttpRequest } from '@angular/common/http';
import {ViewChild,ElementRef} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FileService {

  constructor(private http: HttpClient) { }
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files = [];


  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8080/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }

    uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

}
