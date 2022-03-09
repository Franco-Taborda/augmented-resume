import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { EmailService } from 'services/email.service';
import { SharedModule } from 'shared/shared.module';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let debugElement: DebugElement;
  let matDialog: MatDialog;
  let emailService: EmailService;
  let matSnackBar: MatSnackBar;
  let matBottomSheet: MatBottomSheet;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [CommonModule, SharedModule, ReactiveFormsModule, HttpClientModule],
      providers: [EmailService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        matDialog = TestBed.inject(MatDialog);
        matSnackBar = TestBed.inject(MatSnackBar);
        emailService = TestBed.inject(EmailService);
        matBottomSheet = TestBed.inject(MatBottomSheet);

        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a title', () => {
    const title = debugElement.query(By.css('[data-test="title"]'));
    expect(title).toBeTruthy();
  });

  it('should show a text', () => {
    const text = debugElement.query(By.css('[data-test="contact-text"]'));
    expect(text).toBeTruthy();
  });

  it('should show a social media button', () => {
    const button = debugElement.query(By.css('[data-test="social-media-button"]'));
    expect(button).toBeTruthy();
  });

  it('#viewSocialMedia should open a bottom sheet', () => {
    const matBottomSheetSpy = spyOn(matBottomSheet, 'open');
    component.viewSocialMedia();
    fixture.detectChanges();
    expect(matBottomSheetSpy).toHaveBeenCalled();
  });

  // Form

  it('should show a form', () => {
    const form = debugElement.query(By.css('[data-test="form"]'));
    expect(form).toBeTruthy();
  });

  it('should not show any errors if no input was modified', () => {
    let inputError = debugElement.queryAll(By.css('mat-error'));
    expect(component.form.untouched).toBeTrue();
    expect(inputError).toHaveSize(0);
  });

  // Full Name input

  it('should show a name input', () => {
    const nameInput = debugElement.query(By.css('[data-test="name"]'));
    expect(nameInput).toBeTruthy();
  });

  it('should show an error if name is empty', () => {
    component.fullName.markAsTouched();
    fixture.detectChanges();

    const nameError = debugElement.query(By.css('[data-test="name-empty"]'));
    expect(nameError).toBeTruthy();
  });

  // Email Address input

  it('should show an email address input', () => {
    const emailAddressInput = debugElement.query(By.css('[data-test="email"]'));
    expect(emailAddressInput).toBeTruthy();
  });

  it('should show an error if email is empty', () => {
    component.emailAddress.markAsTouched();
    fixture.detectChanges();

    const emailError = debugElement.query(By.css('[data-test="email-empty"]'));
    expect(emailError).toBeTruthy();
  });

  it('should show an error if email has an invalid format', () => {
    component.emailAddress.markAsTouched();
    component.form.patchValue({ emailAddress: 'test wrong email' });
    fixture.detectChanges();

    const emailError = debugElement.query(By.css('[data-test="email-wrong"]'));
    expect(emailError).toBeTruthy();
  });

  it('should show an error if a forbidden email is entered', () => {
    component.emailAddress.markAsTouched();
    component.form.patchValue({ emailAddress: 'franco_x@outlook' });
    fixture.detectChanges();

    // No error
    let emailError = debugElement.query(By.css('[data-test="email-forbidden"]'));
    expect(emailError).toBeFalsy();

    component.form.patchValue({ emailAddress: 'franco_x@outlook.com' });
    fixture.detectChanges();

    // Error
    emailError = debugElement.query(By.css('[data-test="email-forbidden"]'));
    expect(emailError).toBeTruthy();
  });

  // Message input

  it('should show a message input', () => {
    const messageInput = debugElement.query(By.css('[data-test="message"]'));
    expect(messageInput).toBeTruthy();
  });

  it('should show an error if message is empty', () => {
    component.message.markAsTouched();
    fixture.detectChanges();

    const messageError = debugElement.query(By.css('[data-test="message-empty"]'));
    expect(messageError).toBeTruthy();
  });

  // Submit button

  it('should show a submit button', () => {
    const submitButton = debugElement.query(By.css('[data-test="submit"]'));
    expect(submitButton).toBeTruthy();
  });

  it('should disable submit button unless form has no errors', () => {
    const getSubmitButton = (): DebugElement => debugElement.query(By.css('[data-test="submit"]'));
    expect(getSubmitButton().nativeElement.disabled).toBeTrue();

    component.form.markAllAsTouched();
    component.form.setValue({ emailAddress: 'test@example.com', fullName: 'test', message: 'test message' });
    fixture.detectChanges();
    expect(getSubmitButton().nativeElement.disabled).toBeFalsy();

    component.form.setValue({ emailAddress: 'email invalid test', fullName: 'test', message: 'test message' });
    fixture.detectChanges();
    expect(getSubmitButton().nativeElement.disabled).toBeTrue();
  });

  it('#submit should show a confirmation dialog', () => {
    const dialogSpy = spyOn(matDialog, 'open').and.callThrough();
    component.form.setValue({ emailAddress: 'test@example.com', fullName: 'test', message: 'test message' });
    component.submit();

    expect(dialogSpy).toHaveBeenCalled();
  });

  it('#sendEmail should call the email service with the provided data', () => {
    const emailServiceSpy = spyOn(emailService, 'sendEmail').and.returnValue(of('test'));
    component.form.setValue({ emailAddress: 'test@example.com', fullName: 'test', message: 'test message' });
    component['sendEmail']();

    expect(emailServiceSpy).toHaveBeenCalledWith(component.form.value);
  });

  it('should show a snack bar if email post is successful', () => {
    const formValue = { emailAddress: 'test@example.com', fullName: 'test', message: 'test message' };
    const matSnackBarSpy = spyOn(matSnackBar, 'open');

    spyOn(emailService, 'sendEmail').and.returnValue(of('Success!'));
    component.form.setValue(formValue);
    component['sendEmail']();

    expect(matSnackBarSpy).toHaveBeenCalled();
  });

  it('should show a snack bar if email post fails', () => {
    const formValue = { emailAddress: 'test@example.com', fullName: 'test', message: 'test message' };
    const matSnackBarSpy = spyOn(matSnackBar, 'open');

    spyOn(emailService, 'sendEmail').and.returnValue(throwError(() => new Error('test')));
    component.form.setValue(formValue);
    component['sendEmail']();

    expect(matSnackBarSpy).toHaveBeenCalled();
  });
});
