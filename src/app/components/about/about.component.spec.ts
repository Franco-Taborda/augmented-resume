import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'shared/shared.module';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElem: DebugElement;
  let matSnackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AboutComponent],
      imports: [SharedModule],
      providers: [MatSnackBar],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        debugElem = fixture.debugElement;
        matSnackBar = TestBed.inject(MatSnackBar);
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a download button', () => {
    const button = debugElem.query(By.css('[data-test="download-button"]'));
    expect(button).toBeTruthy();
  });

  it('should show an about section', () => {
    const aboutSection = debugElem.query(By.css('[data-test="about"]'));
    expect(aboutSection).toBeTruthy();
  });

  it('#downloadCV should show a snackbar', () => {
    const dialogOpenSpy = spyOn(matSnackBar, 'open');
    component.downloadCV();

    expect(dialogOpenSpy).toBeTruthy();
  });
});
