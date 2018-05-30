import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CookieService} from 'ngx-cookie-service';

export interface Cookie {
  cookieName: string;
  cookieValue: boolean;
}

@Injectable()
export class CookieStateService {

  private cookieName = `6d9f61d2-3b44-4eef-b237-b3c81b26e34e-ff`; // A kinda key that is always the same

  // This stores the service that is currently highlighted as an Observable String Source
  private showCookiesMessage: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private cookieService: CookieService
  ) {
    this.emitShowCookiesMessage(!this.cookieService.get(this.cookieName));
  }

  // Observable string streams
  public showCookiesMessage$ = this.showCookiesMessage.asObservable();

  // Emit values via observables
  public emitShowCookiesMessage(isTrue: boolean) {
    this.showCookiesMessage.next(isTrue);
  }

  public setCookieAsDismissed() {
    const cookie: Cookie = {cookieName: this.cookieName, cookieValue: true};

    this.cookieService.set(cookie.cookieName, cookie.cookieValue.toString());
    this.emitShowCookiesMessage(false);
  }

}

