import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareLinksComponent } from './share-links/share-links.component';
import { ShortenString } from './pipes/shorten-string.pipe';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { IconsComponent } from './icons/www-icons.component';
import { CookieMessageComponent } from './cookie-message/cookie-message.component';
import { RouterModule } from '@angular/router';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { ResponsiveVideoComponent } from './responsive-video/responsive-video.component';

const SHARED_COMPONENTS = [
  ShareLinksComponent,
  IconsComponent,
  CookieMessageComponent,
  ResponsiveVideoComponent
];

const SHARED_PIPES = [
  ShortenString,
  EscapeHtmlPipe,
  KebabCasePipe
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SHARED_COMPONENTS, SHARED_PIPES],
  exports: [SHARED_COMPONENTS, SHARED_PIPES],
  providers: [SHARED_PIPES]
})
export class SharedModule { }
