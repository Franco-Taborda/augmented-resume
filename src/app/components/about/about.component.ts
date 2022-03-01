import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

enum Messages {
  'Comming soon',
  'Not ready yet',
  'Wait a little more',
  'Enough',
  'ಠ_ಠ',
  "That's it",
  "(ง'̀-'́)ง",
  'Come here',
  'ლ(ಠ益ಠლ)',
  '(╯°□°)╯︵(.o.)',
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  private counter = 0;
  constructor(private snackBar: MatSnackBar) {}

  downloadCV(): void {
    this.snackBar.dismiss();
    this.counter++;

    if (this.counter >= 30) {
      this.counter = 0;
    }

    const messageIndex = Math.floor(this.counter / 3);
    this.snackBar.open(Messages[messageIndex], 'Got it');
  }
}
