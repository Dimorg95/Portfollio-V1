import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetsListComponent } from './components/projets-list/projets-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TechnologyComponent } from './components/technology/technology.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ProjetsListComponent,
    TechnologyComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
