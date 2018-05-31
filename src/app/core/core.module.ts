// core module - used by app module and no others

// angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Services
import { CookieStateService } from './services/cookie.service';
import { CookieService } from 'ngx-cookie-service';

// Components
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { NavBarComponent } from './components/nav-bar-component/nav-bar.component';


const CORE_SERVICES = [
  CookieStateService,
  CookieService
];

const CORE_COMPONENTS = [
  MobileNavComponent
];

const CORE_EXPORTED_COMPONENTS = [
  NavBarComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [CORE_COMPONENTS, CORE_EXPORTED_COMPONENTS],
  exports: [CORE_EXPORTED_COMPONENTS],
  providers: [CORE_SERVICES]
})
export class CoreModule { }
