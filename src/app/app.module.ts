import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from 'ng-particles';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PresentationComponent],
  imports: [BrowserModule, NgParticlesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
