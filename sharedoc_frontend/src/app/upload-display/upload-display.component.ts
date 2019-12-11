import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-display',
 /* template: 
  <pdf-viewer [src] = "pdfSrc" [render-text] = "true" style = "display:block;"></pdf-viewer> */
  templateUrl: './upload-display.component.html',
  styleUrls: ['./upload-display.component.css']
})
export class UploadDisplayComponent implements OnInit {

  pdfSrc = "src/app/assets/pdfs/PDF1";

  constructor() { }

  ngOnInit() {
  }

  coursesOfStudy = ["AI"];
  semesters = ["1.", "2.", "3.", "4.", "5.", "6."];
  subjects = ["subject1", "subject2"];
  professors = ["Heitsch", "Neitzke", "Wendholt", "Klauck"];
}
