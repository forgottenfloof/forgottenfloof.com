import {Component, OnDestroy, Renderer2} from '@angular/core';
import {MenuItem, menuItems} from '../../../contentData/menu-content';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnDestroy {

  public menuItems: Array<MenuItem> = menuItems;
  public active = false;

  constructor(
    private renderer: Renderer2,
    ) { }

  public toggleActive(e: Event) {
    e.preventDefault();
    this.active = !this.active;
    this.toggleOpenOnBody(this.active);
  }

  toggleOpenOnBody(open: boolean): void {
    return open ? this.renderer.addClass(document.body, 'menu-open') : this.renderer.removeClass(document.body, 'menu-open');
  }

  ngOnDestroy(): void {
    this.active = false;
    this.toggleOpenOnBody(this.active);
  }

}

