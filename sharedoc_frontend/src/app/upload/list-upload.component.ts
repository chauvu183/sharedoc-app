import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FileService} from "./file.service";

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.fileService.getFiles();
    }
  }
}
