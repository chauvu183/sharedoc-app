import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile = null;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  OnFileSelectedListener(event) {
    this.selectedFile = event.target.files[0];
    console.log('testing', this.selectedFile);
  }


/*  toBase64() {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => resolve(reader.result );
    reader.onerror = error => reject(error);
  });
}
*/
  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/documents/uploadDocument', fd, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100)  + '%' );
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
}

}
