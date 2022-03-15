import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SidenavComponent } from 'components/sidenav/sidenav.component';
import { PWAService } from 'services/pwa.service';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let pwaService: PWAService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ResumeComponent, SidenavComponent],
      providers: [PWAService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResumeComponent);
        component = fixture.componentInstance;
        pwaService = TestBed.inject(PWAService);
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a sidenav component', () => {
    const sidenavDebugElem = fixture.debugElement.query(By.directive(SidenavComponent));
    expect(sidenavDebugElem).toBeTruthy();
  });

  it('#onItemClick should close sidenav', () => {
    const sidenavDebugElem = fixture.debugElement.query(By.directive(SidenavComponent)).componentInstance;
    const closeSidenavSpy = spyOn(sidenavDebugElem, 'closeSidenav');
    component.onItemClick('testSelector');

    expect(closeSidenavSpy).toHaveBeenCalled();
  });

  it('should not show an install button', () => {
    const installButton = fixture.debugElement.query(By.css('[data-test="install-button"]'));
    expect(installButton).toBeFalsy();
  });

  it('should show an install button', () => {
    spyOn(pwaService, 'isInstallable').and.returnValue(true);
    pwaService.handleInstallability('test beforeinstallpromptEvent');
    fixture.detectChanges();

    const installButton = fixture.debugElement.query(By.css('[data-test="install-button"]'));
    expect(installButton).toBeTruthy();
  });

  it('#resumeInstallation should call pwa service', () => {
    const pwaServiceSpy = spyOn(pwaService, 'resumeInstallation');
    component.resumeInstallation();
    expect(pwaServiceSpy).toHaveBeenCalled();
  });
});
