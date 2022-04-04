import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceDetectorService } from 'ngx-device-detector';

import { ISkill, ISkillCategory } from './model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  @Input() skillsCategories: ISkillCategory[];
  @ViewChild('certificatesTemplate', { read: TemplateRef }) certificatesTemplate: TemplateRef<any>;

  isDesktop: boolean;
  expanded = false;

  constructor(private matDialog: MatDialog, private deviceService: DeviceDetectorService) {
    this.isDesktop = this.deviceService.isDesktop();
    this.setExpandableCardProperties();
  }

  showCertificates(skill: ISkill): void {
    this.matDialog.open(this.certificatesTemplate, {
      data: skill.certificates,
    });
  }

  private setExpandableCardProperties(): void {
    if (this.isDesktop) {
      this.expanded = true;
    }
  }
}
