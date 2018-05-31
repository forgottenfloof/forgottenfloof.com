import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MenuItem, menuItems} from '../../../contentData/menu-content';

@Component({
    selector: 'app-nav-bar',
    styleUrls: ['nav-bar.component.scss'],
    templateUrl: 'nav-bar.component.html'
})

export class NavBarComponent implements OnInit, AfterViewInit {

    public menuItems: Array<MenuItem> = menuItems;
    public innerWidth: number;

    @ViewChild('navBar') parentElement: ElementRef;

    @HostListener('window:resize') onResize() {
      // guard against resize before view is rendered
      if (this.parentElement) {
        this.innerWidth = this.parentElement.nativeElement.clientWidth;
      }
    }

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        // wait a tick to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => {
          this.innerWidth = this.parentElement.nativeElement.clientWidth;
        });
    }
}
