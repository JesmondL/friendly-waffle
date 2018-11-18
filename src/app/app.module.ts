import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouteModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroListComponent } from './components/herolist/herolist.component';
import { HeroDetailsComponent } from './components/herodetails/herodetails.component';
import { CharacterComponent } from './components/character/character.component';

import { MaterialModule } from './material/material.module';
import { MarvelService } from './marvel.service';

import public_key from "./../apikey.json";

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule, AppRouteModule
  ],
  providers: [
    { provide: 'appKey', useValue: public_key['public_key'] },
    MarvelService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
