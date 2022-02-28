import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatListModule],
  exports: [CommonModule, MatSidenavModule, MatListModule],
})
export class MaterialModule {}
