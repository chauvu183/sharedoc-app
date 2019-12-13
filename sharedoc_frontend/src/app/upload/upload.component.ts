import { Component, OnInit } from '@angular/core';
import {HttpResponse, HttpEventType} from '@angular/common/http';
import {FileService} from "./file.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  selectedFile = null;

  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: FileService) { }

  ngOnInit() {
  }

  OnFileSelectedListener(event) {
    this.selectedFiles = event.target.files;
  }
  onUpload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.uploadFile(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          alert('File Successfully Uploaded');
        }
        this.selectedFiles = undefined;
      }
    );
}

  onMultiUpload() {
    for(let i = 0; i < this.selectedFiles.length;i++){
      let fileItem = this.selectedFiles[i];
      if(fileItem.size > 10000000){
        alert("Each File should be less than 10 MB of size.");
        return;
      }
      for (let j = 0; j < this.selectedFiles.length; j++) {
        let data = new FormData();
        let fileItem = this.selectedFiles[j];
        console.log(fileItem.name);
        data.append('file', fileItem);
        data.append('fileSeq', 'seq'+j);
        data.append( 'dataType', this.selectedFiles.item(j).type);
        this.uploadService.uploadFile(this.selectedFiles.item(j)).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            alert('File Successfully Uploaded');
          }
          this.selectedFiles = undefined;
        }
        );
      }
      this.selectedFiles = null;
    }

  }


}
