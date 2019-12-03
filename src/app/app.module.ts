import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BiensModule } from './views/biens/biens.module';
import { AcquereursModule } from './views/acquereurs/acquereurs.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { FakeBackendInterceptor } from './shared/interceptors/fake-backend.interceptor';
import { HttpRequestInterceptor } from './shared/interceptors/http.interceptor';
const DevProfileModule = [];

// In Dev mode, uses data mock
if (environment.mock_ws) {
  DevProfileModule.push(InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }));
}

export const isMock = environment.mock_ws;

export function tokenGetter() {
  return localStorage.getItem('access_token');
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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/login'],
        skipWhenExpired: true
      }
    }),
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }),
    BrowserAnimationsModule,
    // DevProfileModule,
    AppRoutingModule,
    BiensModule,
    AcquereursModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: isMock ? FakeBackendInterceptor : HttpRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
