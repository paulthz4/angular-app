import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
// make sure the wild card route for not found pages is the last path

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
