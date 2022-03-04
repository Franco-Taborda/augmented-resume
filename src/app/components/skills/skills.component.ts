import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private matDialog: MatDialog) {}

  showCertificates(skill: ISkill): void {
    this.matDialog.open(this.certificatesTemplate, {
      data: skill.certificates,
    });
  }
}
