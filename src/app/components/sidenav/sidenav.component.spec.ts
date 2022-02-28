import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [BrowserAnimationsModule, MatSidenavModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a sidenav', () => {
    const sidenavElem = fixture.debugElement.query(By.css('mat-sidenav-container'));
    expect(sidenavElem).toBeTruthy();
  });

  it('should show a button to toggle the sidenav', () => {
    const button = fixture.debugElement.query(By.css('[data-test="toggle-sidenav-button"'));
    expect(button).toBeTruthy();
  });

  it('#onCloseSidenav should close sidenav', () => {
    const sidenavOpenSpy = spyOn(component.sidenav, 'open');
    component.openSidenav();

    expect(sidenavOpenSpy).toHaveBeenCalled();
  });
});
