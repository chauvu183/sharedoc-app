import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from '../homepage/homepage.component';
import {UploadComponent} from '../upload/upload.component';
import {PinboardComponent} from '../pinboard/pinboard.component';


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
    path: 'pinboard',
    component: PinboardComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },

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
