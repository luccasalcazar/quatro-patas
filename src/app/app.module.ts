import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { RegrasComponent } from './pages/regras/regras.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdoteComponent } from './pages/adote/adote.component';
import { CardComponent } from './components/card/card.component';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegrasComponent,
    AdoteComponent,
    ButtonComponent,
    CardComponent,
    LikeButtonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
