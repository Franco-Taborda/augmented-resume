import { Component, OnInit } from '@angular/core';
import { IExperience } from 'components/experience/models/experience.interface';
import { ExperienceService } from 'services/experience.service';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SkillSVGs } from 'components/skills/enums/skills.enum';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experience$: Observable<IExperience[]>;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experience$ = this.experienceService.getExperience().pipe(
      map((experienceList) => {
        experienceList.forEach((exp) => {
          exp.startDate = new Date(exp.startDate);
          exp.endDate = new Date(exp.endDate);
          exp.projects.forEach((project) => {
            project.usedTechnologies.forEach(
              (technology) => (technology.imgSrc = `${environment.url}/assets/images/${SkillSVGs[technology.name]}`),
            );
          });
        });
        return experienceList;
      }),
    );
  }
}
