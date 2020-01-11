import {ApplicationInitStatus, Component, OnInit} from '@angular/core';
import {ApiService} from "../share/api.service";
import {Note} from "./module/note";

@Component({
  selector: 'app-pinboard',
  templateUrl: './pinboard.component.html',
  styleUrls: ['./pinboard.component.css']
})
export class PinboardComponent implements OnInit {

  notes: Note[] = [];
  searchText: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllNotes();
    console.log(this.notes);
  }


  createNote() {
    let newNote: Note = {
      id: null,
      title: "Title",
      description: "Write some massages here",
    };
    
    this.apiService.saveNote(newNote).subscribe(
      res => {
        newNote.id = res.id;
        this.notes.push(newNote);
      },
      err => {alert("An error occurred while saving the note");}
    );
  }


  getAllNotes(){
    this.apiService.getAllNotes().subscribe(
      res => {
        this.notes = res;
        console.log(this.notes);
      },
      err => {alert("Error occurred while downloading the notes;")}
    );
  }


    deleteNote(note: Note){
      if(confirm("Are you sure you want to delete this note?")){
        console.log(note);
        this.apiService.deleteNote(note.id).subscribe(
          res =>{
            let indexOfNote = this.notes.indexOf(note);
            this.notes.splice(indexOfNote, 1);
          },
          err=>{alert("An error has occurred deleting the note");}
        );
      }
    }


  updateNote(updatedNote: Note) {
    this.apiService.saveNote(updatedNote).subscribe(
      res => {
      },
      err => {alert("An error occurred while saving the note");}
    );
  }


}
