import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';
import { MatDrawerMode } from '@angular/material/sidenav';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  version = environment.version;
  mode: MatDrawerMode = 'over';
  opened = false;
  isDesktop: boolean;

  constructor(private deviceService: DeviceDetectorService) {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    this.isDesktop = this.deviceService.isDesktop();
    this.setSidenavProperties();
  }

  closeSidenav(): void {
    document.querySelector('app-about')?.scrollIntoView({ behavior: 'smooth' });

    if (!this.isDesktop) {
      this.sidenav.close();
    }
  }

  openSidenav(): void {
    this.sidenav.open();
  }

  private setSidenavProperties(): void {
    if (this.isDesktop) {
      this.mode = 'side';
      this.opened = true;
    }
  }
}
