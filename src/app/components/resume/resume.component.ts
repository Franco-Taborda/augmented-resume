import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from 'components/sidenav/sidenav.component';
import { ISkillCategory } from 'components/skills/model/skill';
import { Subject, takeUntil } from 'rxjs';
import { PWAService } from 'services/pwa.service';
import { SkillsService } from 'services/skills.service';
import { DeviceModes } from 'utils/enums/device-modes';
import { getPWADisplayMode } from 'utils/functions/display-utils';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, OnDestroy {
  @ViewChild(SidenavComponent) sidenavCompnent: SidenavComponent;
  skillsCategories: ISkillCategory[];
  showInstallButton$: Subject<boolean> = this.pwaService.installationFlag$;

  private readonly destroy$ = new Subject<void>();

  constructor(private skillsService: SkillsService, private pwaService: PWAService) {
    this.checkLaunchMode();
    this.deferInstallprompt();
    this.checkInstallation();
  }

  ngOnInit() {
    this.skillsService
      .getSkills()
      .pipe(takeUntil(this.destroy$))
      .subscribe((skillsCategories) => {
        this.skillsCategories = skillsCategories;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(void 0);
    this.destroy$.complete();
  }

  onItemClick(selector: string): void {
    this.sidenavCompnent.closeSidenav();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }

  resumeInstallation(): void {
    this.pwaService.resumeInstallation();
  }

  private checkLaunchMode(): void {
    if ((getPWADisplayMode() as DeviceModes) !== DeviceModes.browser) {
      this.pwaService.showInstallation();
    }
  }

  private deferInstallprompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.pwaService.deferInstallPrompt = e;
    });
  }

  private checkInstallation(): void {
    window.addEventListener('appinstalled', () => {
      this.pwaService.hideInstallation();
    });
  }
}
