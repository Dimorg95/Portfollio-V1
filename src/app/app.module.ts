import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from 'ng-particles';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetsListComponent } from './components/projets-list/projets-list.component';
import { ProjetComponent } from './components/projet/projet.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ProjetsListComponent,
    ProjetComponent,
  ],
  imports: [BrowserModule, NgParticlesModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
