import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { REST_URLS } from '../constants/rest-urls';
import * as bien from '../../../assets/mock-objects/bien.json';
import * as biens from '../../../assets/mock-objects/biensDTO.json';
import * as biensEtatCreation from '../../../assets/mock-objects/biens-etat-creation.json';
import * as consultants from '../../../assets/mock-objects/consultants.json';
import * as user from '../../../assets/mock-objects/user.json';

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

const urls = [
  {
    url: '/bien/1',
    json: bien
  },
  {
    url: REST_URLS.BIEN_RECHERCHER_BIEN,
    json: biens
  },
  {
    url: REST_URLS.BIEN_GET_BIEN_ETAT_CREATION,
    json: biensEtatCreation
  },
  {
    url: REST_URLS.CONSULTANTS,
    json: consultants
  }
];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      // tslint:disable-next-line: max-line-length
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/register') && method === 'POST':
          return register();
        case url.endsWith(REST_URLS.LOGIN) && method === 'POST':

          return signin();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:
          for (const element of urls) {
            if (url.endsWith(element.url)) {
              console.log('Loaded from json : ' + request.url);
              return of(new HttpResponse({ status: 200, body: ((element.json) as any).default }));
            }
          }

          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function register() {
      const user = body;

      if (users.find(x => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function signin() {
      const { username, password } = body;
      // const user = users.find(x => x.username === username && x.password === password);
      // if (!user) { return error('Username or password is incorrect'); }

      if (username !== 'admin@gmail.com' || password !== 'admin') {
        return error('Nom d\'utilisateur ou mot de passe n\'est pas correct');
      }
      return ok((user as any).default);
    }

    function getUsers() {
      if (!isLoggedIn()) { return unauthorized(); }
      return ok(users);
    }

    function getUserById() {
      if (!isLoggedIn()) { return unauthorized(); }

      const user = users.find(x => x.id == idFromUrl());
      return ok(user);
    }

    function deleteUser() {
      if (!isLoggedIn()) { return unauthorized(); }

      users = users.filter(x => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
