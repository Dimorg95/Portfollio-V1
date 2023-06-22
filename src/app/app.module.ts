import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetsListComponent } from './components/projets-list/projets-list.component';

import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ProjetsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
