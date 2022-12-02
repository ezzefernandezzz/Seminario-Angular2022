import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListComponent } from './serie-list/serie-list.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { SeriesComponent } from './series/series.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FormVotacionComponent } from './form-votacion/form-votacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent,
    AboutComponent,
    SeriesComponent,
    FavoritosComponent,
    FormVotacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
