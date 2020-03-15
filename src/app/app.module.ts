import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StoreModule } from '@ngrx/store'
import { Reducers } from '../app/store/Reducers';
import { ReadComponent } from './read/read.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    // using index of redux for using multiple redux 
    StoreModule.forRoot(Reducers),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
