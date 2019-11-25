import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { MatTabsModule} from '@angular/material';

import {HeaderComponent} from './layout/header/header.component';
import { PinboardComponent } from './pinboard/pinboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UploadComponent } from './upload/upload.component';
import { UploadDisplayComponent } from './upload-display/upload-display.component';

import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './layout/footer/footer.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

// import { FeedbackComponent } from './feedback/feedback.component';
import {FormsModule} from '@angular/forms';
import {MainNavComponent} from './layout/main-nav/main-nav.component';
import {RouterModule} from '@angular/router';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PinboardComponent,
    HomepageComponent,
    UploadComponent,
    UploadDisplayComponent,
    FooterComponent,
    MainNavComponent,
   // FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'upload', component: UploadComponent},
    ]),
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ]
})
export class AppModule { }
