import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule, MatSnackBarModule],
  exports: [MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule, MatSnackBarModule],
})
export class MaterialModule {}
