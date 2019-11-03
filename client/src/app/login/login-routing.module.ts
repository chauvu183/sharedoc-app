import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, data: {
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
export class LoginRoutingModule { }
