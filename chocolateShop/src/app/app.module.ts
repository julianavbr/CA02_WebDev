import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { ChocolatesListComponent } from './chocolates-list/chocolates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HttpClientModule,
    ChocolatesComponent,
    ChocolatesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
