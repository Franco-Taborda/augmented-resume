import { ViewportScroller } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private viewportScroller: ViewportScroller) {}

  closeSidenav(): void {
    document.querySelector('app-about')?.scrollIntoView({ behavior: 'smooth' });
    this.sidenav.close();
  }

  openSidenav(): void {
    this.sidenav.open();
  }
}
