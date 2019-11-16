import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from '../homepage/homepage.component';
import {UploadComponent} from '../upload/upload.component';
import {UploadDisplayComponent} from '../upload-display/upload-display.component';
import {PinboardComponent} from '../pinboard/pinboard.component';
import {RegisterComponent} from '../register/register.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: RegisterComponent
  },
  {
    path: 'pinboard',
    component: PinboardComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'uploadDisplay',
    component: UploadDisplayComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule {
}
