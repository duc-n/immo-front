import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { HttpClientModule } from '@angular/common/http';
import { BiensModule } from './views/biens/biens.module';
import { AcquereursModule } from './views/acquereurs/acquereurs.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

const DevProfileModule = [];

// In Dev mode, uses data mock
if (environment.mock_ws) {
  DevProfileModule.push(InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }));
}

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASY4NUs5fZLtQ9KkAHe4YThnDKBaNCW4k',
      libraries: ['places']
    }),
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DevProfileModule,
    AppRoutingModule,
    BiensModule,
    AcquereursModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
