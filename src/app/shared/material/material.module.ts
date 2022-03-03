import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatIconModule],
  exports: [MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatIconModule],
})
export class MaterialModule {}
