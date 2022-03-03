import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class DeviceGuard implements CanLoad {
  constructor(private deviceService: DeviceDetectorService, private router: Router) {}

  canLoad(route: Route): boolean | UrlTree {
    if (route.path === 'home' && this.deviceService.isDesktop()) {
      return this.router.createUrlTree(['home-full']);
    } else if (route.path === 'home-full' && this.deviceService.isMobile()) {
      return this.router.createUrlTree(['/home']);
    }

    return true;
  }
}
