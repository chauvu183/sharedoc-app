import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';

import { PinboardComponent } from './pinboard/pinboard.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { UploadComponent } from './upload/upload.component';
import { UploadDisplayComponent } from './upload-display/upload-display.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent },
  {path: 'pinboard', component: PinboardComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'uploadDisplay', component: UploadDisplayComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
