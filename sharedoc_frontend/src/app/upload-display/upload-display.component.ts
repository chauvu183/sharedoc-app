import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-display',
  templateUrl: './upload-display.component.html',
  styleUrls: ['./upload-display.component.css'],
})
export class UploadDisplayComponent implements OnInit {
  constructor() {}

  todos = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => (this.todos = json));
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
