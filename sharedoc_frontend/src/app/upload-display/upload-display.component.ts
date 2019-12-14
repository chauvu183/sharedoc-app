import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-display',
  templateUrl: './upload-display.component.html',
  styleUrls: ['./upload-display.component.css'],
})
export class UploadDisplayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  coursesOfStudy = ['AI'];
  semesters = ['1.', '2.', '3.', '4.', '5.', '6.'];
  subjects = ['subject1', 'subject2', 'subject3', 'subject4'];
  professors = ['Heitsch', 'Neitzke', 'Wendholt', 'Klauck'];
  documents = [
    { title: 'A title', url: 'https://www.google.com' },
    { title: 'Another title', url: 'https://www.youtube.com' },
  ];
}
