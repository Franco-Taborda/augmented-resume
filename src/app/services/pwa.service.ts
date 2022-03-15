import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PWAService {
  private beforeinstallpromptEvent: any;
  private readonly showInstallationSubject$: Subject<boolean> = new Subject<boolean>();

  get installationFlag$(): Subject<boolean> {
    return this.showInstallationSubject$;
  }

  showInstallation() {
    this.showInstallationSubject$.next(true);
  }

  hideInstallation() {
    this.showInstallationSubject$.next(false);
  }

  set deferInstallPrompt(e: Event) {
    this.beforeinstallpromptEvent = e;
  }

  resumeInstallation(): void {
    console.log('Installation resumed');
    this.beforeinstallpromptEvent?.prompt();
    this.hideInstallation();
    this.beforeinstallpromptEvent = null;
  }
}
