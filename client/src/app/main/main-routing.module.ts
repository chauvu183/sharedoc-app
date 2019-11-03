import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, data: {
      layout: {
        header: true,
        headerFixed: false,
        sidebar: false,
        sidebarFixed: false,
        paddings: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16
        }
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
