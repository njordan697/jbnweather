import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { BulletinService } from './services/bulletin.service';
import { AuthComponent } from './auth/auth.component';
import { BulletinViewComponent } from './bulletin-view/bulletin-view.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BulletinNathanComponent } from './bulletin-nathan/bulletin-nathan.component';
import { BulletinJonathanComponent } from './bulletin-jonathan/bulletin-jonathan.component';


const appRoutes: Routes = [
  { path: 'bulletins', component: BulletinViewComponent },
  { path: 'bulletinsJonathan', component: BulletinJonathanComponent },
  { path: 'bulletinsNathan', component: BulletinNathanComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: BulletinViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BulletinComponent,
    AuthComponent,
    BulletinViewComponent,
    BulletinNathanComponent,
    BulletinJonathanComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACc1LK8OszohA3RkypX7UjSWs0KmJ6-Cw'
    })
  ],
  providers: [
  BulletinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
