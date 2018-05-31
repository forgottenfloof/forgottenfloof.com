import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {CookieStateService} from './core/services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  constructor(
    private changeDetector: ChangeDetectorRef,
    public cookieService: CookieStateService,
  ) { }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
