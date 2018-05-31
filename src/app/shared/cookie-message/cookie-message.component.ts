import { Component, OnInit } from '@angular/core';
import {Cookie, CookieStateService} from '../../core/services/cookie.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-message',
  templateUrl: './cookie-message.component.html',
  styleUrls: ['./cookie-message.component.scss']
})
export class CookieMessageComponent implements OnInit {

  constructor(
    public cookieStateService: CookieStateService,
  ) {}

  ngOnInit() {
  }

}
