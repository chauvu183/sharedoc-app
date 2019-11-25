import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  OnFileSelectedListener(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('', fd,{
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      console.log(event);
    });
}
}
