import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule, ApiService, PaginationApiService } from '../modules/core';
import { UsersListModule } from './users-list';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    UsersListModule,
    HttpClientModule
  ],
  providers: [
    
    ApiService,
    PaginationApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
