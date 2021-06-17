import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarreDeNavigationComponent } from './components/barre-de-navigation/barre-de-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent,
    BarreDeNavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp({

      apiKey: "AIzaSyDlTzt3H2Gihx_Hy5NpqRO7aiwWBy70ysU",
      authDomain: "auth-23a23.firebaseapp.com",
      projectId: "auth-23a23",
      storageBucket: "auth-23a23.appspot.com",
      messagingSenderId: "670772566603",
      appId: "1:670772566603:web:c1a5b63845fb7e1e140bce"
    
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' },FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
