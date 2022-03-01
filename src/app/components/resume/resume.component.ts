import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from 'components/sidenav/sidenav.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  @ViewChild(SidenavComponent) sidenavCompnent: SidenavComponent;

  onItemClick(selector: string): void {
    this.sidenavCompnent.closeSidenav();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }
}
