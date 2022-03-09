import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IContactInfo } from 'components/contact/model/contact';
import { Subject, takeUntil } from 'rxjs';
import { ContactInfoService } from 'services/contact.service';
import { EmailService } from 'services/email.service';
import { forbiddenEmailAddress } from 'shared/directives/forbidden-email-address.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('confirmationTemplate') confirmationTemplate: TemplateRef<any>;
  @ViewChild('bottomSheetTemplate') bottomSheetTemplate: TemplateRef<any>;
  private readonly destroy$ = new Subject<void>();

  private forbiddenEmailAddresses = [/franco_x@outlook.com/];
  private contactInfo: IContactInfo[] = [];

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.email,
      forbiddenEmailAddress(this.forbiddenEmailAddresses),
    ]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
  });

  constructor(
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private matBottomSheet: MatBottomSheet,
    private emailService: EmailService,
    private contactService: ContactInfoService,
    private clipboard: Clipboard,
  ) {}

  ngOnInit() {
    this.contactService
      .getSocialMediaLinks()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => (this.contactInfo = res),
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
  }

  private getControl(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }

  get fullName(): AbstractControl {
    return this.getControl('fullName');
  }

  get emailAddress(): AbstractControl {
    return this.getControl('emailAddress');
  }

  get message(): AbstractControl {
    return this.getControl('message');
  }

  viewSocialMedia(): void {
    this.matBottomSheet.open(this.bottomSheetTemplate, {
      data: this.contactInfo,
    });
  }

  submit(): void {
    this.matDialog
      .open(this.confirmationTemplate)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.sendEmail();
        }
      });
  }

  private sendEmail(): void {
    this.emailService
      .sendEmail(this.form.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () =>
          this.matSnackBar.open('Email sent successfully!! Franco will reply as soon as possible :D', 'close', {
            duration: 3500,
            panelClass: 'snackbar--success',
          }),
        error: () =>
          this.matSnackBar.open('Oops! Something went wrong. Please try again or use another email client.', 'close', {
            duration: 3500,
            panelClass: 'snackbar--error',
          }),
      });
  }

  copy(data: string): void {
    this.clipboard.copy(data);
  }
}
