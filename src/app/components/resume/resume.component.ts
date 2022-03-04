import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from 'components/sidenav/sidenav.component';
import { ISkillCategory } from 'components/skills/model/skill';
import { Observable } from 'rxjs';
import { SkillsService } from 'services/skills.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  @ViewChild(SidenavComponent) sidenavCompnent: SidenavComponent;
  skillsCategories: ISkillCategory[];

  constructor(private skillsService: SkillsService) {
    this.skillsService.getSkills().pipe();
  }

  ngOnInit() {
    this.skillsService.getSkills().subscribe((skillsCategories) => {
      this.skillsCategories = skillsCategories;
    });
  }

  onItemClick(selector: string): void {
    this.sidenavCompnent.closeSidenav();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }
}
