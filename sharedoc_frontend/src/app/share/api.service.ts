import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../pinboard/module/note";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private BASE_URL = "http://localhost:8080/pinboard/entries";

  private ALL_NOTES_URL = `${this.BASE_URL}/all`;
  private SAVE_UPDATE_NOTE_URL = `${this.BASE_URL}/{entryId}`;
  private NOTE_BY_ID = `${this.BASE_URL}/entries/`;

  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<Note[]> {
    var notes = this.http.get<Note[]>(this.ALL_NOTES_URL);
    return notes;
  }
  /*
  
    getNotesByNoteId(noteId: string): Observable<Note[]> {
      return this.http.get<Note[]>(this.NOTE_BY_ID + noteId);
    }
  */



  saveNote(note: Note): Observable<Note> {
    console.log(note);
    return this.http.post<Note>(this.BASE_URL, note);
    console.log(note);
  }


    deleteNote(noteId:string):Observable<any>{
      return this.http.delete(this.BASE_URL +"/"+ noteId);
    }



}

