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
      'rechercherBien': RechercherBienDB.rechercherBien
    };
  }
  genId(items: any[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
}
