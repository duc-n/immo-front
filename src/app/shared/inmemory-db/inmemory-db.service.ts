import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { ProductDB } from './products';
import { MailDB } from './mails';
import { CountryDB } from './countries';
import { ChatDB } from './chat-db';
import { InvoiceDB } from './invoices';
import { ConsultantDB } from './consultants';
import { ActiviteDB } from './activites';
import { RechercherBienDB } from './rechercher-bien';
import { BienDB } from './bien';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'products': ProductDB.products,
      'invoices': InvoiceDB.invoices,
      'mails': MailDB.messages,
      'countries': CountryDB.countries,
      'contacts': ChatDB.contacts,
      'chat-collections': ChatDB.chatCollection,
      'chat-user': ChatDB.user,
      'consultants': ConsultantDB.consultants,
      'activites': ActiviteDB.activites,
      'bien': BienDB.bien,
      'bien/rechercherBien': RechercherBienDB.rechercherBien
    };
  }
  genId(items: any[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }

  // parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
  //   if (url.endsWith('.json')) {
  //     return utils.parseRequestUrl(url);
  //   }
  //   const splitted = url.split('/');
  //   const isLastArgumentIsId = Number.isInteger(parseInt(splitted[splitted.length — 1], 10));
  //   const collectionIndex = isLastArgumentIsId ? splitted.length — 3 : splitted.length — 2;
  //   const actionIndex = isLastArgumentIsId ? splitted.length — 2 : splitted.length — 1;
  //   const collectionName = splitted[collectionIndex] + splitted[actionIndex];
  //   // const newUrl = splitted.join('/');
  //   const parsed = utils.parseRequestUrl(url);
  //   parsed.apiBase = ApiService.BASE_PATH;
  //   parsed.collectionName = collectionName;
  //   parsed.id = isLastArgumentIsId ? splitted[splitted.length — 1]as   any: '';
  //   parsed.resourceUrl = parsed.resourceUrl + parsed.collectionName;
  //   return parsed;
  // }
}
