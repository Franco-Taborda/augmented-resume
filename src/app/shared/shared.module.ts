import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  imports: [BrowserAnimationsModule, MaterialModule, ClipboardModule],
  exports: [BrowserAnimationsModule, MaterialModule, ClipboardModule],
})
export class SharedModule {}
