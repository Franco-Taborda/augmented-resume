import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceModes } from 'utils/enums/device-modes.enum';
import { getPWADisplayMode } from 'utils/functions/display-utils';

@Injectable({ providedIn: 'root' })
export class PWAService {
  private beforeinstallpromptEvent: any;
  private readonly showInstallationSubject$: Subject<boolean> = new Subject<boolean>();

  get installationFlag$(): Subject<boolean> {
    return this.showInstallationSubject$;
  }

  resumeInstallation(): void {
    console.log('Installation resumed');
    this.beforeinstallpromptEvent?.prompt();
    this.hideInstallation();
    this.beforeinstallpromptEvent = null;
  }

  handleInstallability(event: any): void {
    if (this.isInstallable()) {
      this.showInstallation();
      this.beforeinstallpromptEvent = event;
    } else {
      this.hideInstallation();
    }
  }

  private showInstallation() {
    this.showInstallationSubject$.next(true);
  }

  private hideInstallation() {
    this.showInstallationSubject$.next(false);
  }

  isInstallable(): boolean {
    return [DeviceModes.browser, DeviceModes.twa].includes(getPWADisplayMode());
  }
}
