import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-display',
  templateUrl: './upload-display.component.html',
  styleUrls: ['./upload-display.component.css'],
})
export class UploadDisplayComponent implements OnInit {
  constructor() {}

  saveByteArray(reportName, byte) {
    var blob = new Blob([byte], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    // link.download = fileName;
    link.click();
  }

  base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  todos = [];

  ngOnInit() {
    fetch('http://sharedoc.informatik.haw-hamburg.de/spring/documents')
      .then(response => response.json())
      .then(json => {
        this.todos = json.map(item => {
          const { data } = item;
          return { ...item, data: this.base64ToArrayBuffer(data) };
        });
        console.log(this.todos);
      });
  }

  coursesOfStudy = ['AI'];
  semesters = ['1.', '2.', '3.', '4.', '5.', '6.'];
  subjects = ['subject1', 'subject2', 'subject3', 'subject4'];
  professors = ['Heitsch', 'Neitzke', 'Wendholt', 'Klauck'];
  documents = [
    { name: 'Alice in Wonderland', id: 'someid' },
    { name: 'Avengers: Endgame', id: 'someotherid' },
  ];
}
