import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';

import { FileService } from "./file.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  files = []

  constructor(private uploadService: FileService) { }

  ngOnInit() {
  }

  OnFileSelectedListener(event) {
    this.selectedFiles = event.target.files;
  }

  OnMultiFileSelectedListener(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
          console.log(event.target.result);
          this.files.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }


  onUpload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.uploadFile(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })
    this.selectedFiles = undefined
  }

  onMultiFileUpload(){
      for (let index = 0; index < this.files.length; index++)
      {
        const file = this.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0});
      }
      this.uploadService.uploadFiles();
    }

}
