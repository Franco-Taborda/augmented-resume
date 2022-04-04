import { Injectable } from '@angular/core';
import { IExperience } from 'components/experience/models/experience.interface';
import { SkillTechnologies } from 'components/skills/enums/skills.enum';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  constructor() {}

  getExperience(): Observable<IExperience[]> {
    const experience: IExperience[] = [
      {
        companyName: 'Globant',
        companyUrl: 'https://www.globant.com/',
        startDate: '2018-07-01T00:00:00',
        endDate: '2019-12-01T00:00:00',
        projects: [
          {
            projectName: 'Confirmation Emails development & maintenance',
            jobTitle: 'Front End Developer',
            clientName: 'Disney',
            jobDescriptionItems: [
              'Developed and maintained confirmation emails',
              "Implemented minimum component's changes",
            ],
            usedTechnologies: [
              { name: SkillTechnologies.Html5 },
              { name: SkillTechnologies.CSS3 },
              { name: SkillTechnologies.GitHub },
            ],
          },
          {
            projectName: 'Fail Booking & Fraud Prevention',
            jobTitle: 'Front End Developer',
            clientName: 'Disney',
            jobDescriptionItems: [
              'Analyzed logs to find Fail Booking causes',
              'Analyzed and fixed code bugs',
              'Implemented third party apps usage to improve security',
            ],
            usedTechnologies: [{ name: SkillTechnologies.Javascript }, { name: SkillTechnologies.GitHub }],
          },
        ],
      },
      {
        companyName: 'Bitlogic',
        companyUrl: 'https://www.bitlogic.io',
        startDate: '2019-12-01T00:00:00',
        endDate: '2021-02-01T00:00:00',
        projects: [
          {
            projectName: 'Students Portal',
            jobTitle: 'Front End Developer',
            clientName: 'Universidad Siglo 21',
            jobDescriptionItems: [
              'Been part of a team in charge of developing a mobile application for students',
              "Involved in UX decisions according to client's needs",
            ],
            usedTechnologies: [
              { name: SkillTechnologies.Flutter },
              { name: SkillTechnologies.Dart },
              { name: SkillTechnologies.GitLab },
            ],
          },
          {
            projectName: 'Staff Portal',
            jobTitle: 'Front End Developer',
            clientName: 'Universidad Siglo 21',
            jobDescriptionItems: [
              'Been part of a team in charge of developing a web application for university staff',
              "Involved in UX decisions according to client's needs",
              'Implemented guards for different user roles',
              'Constantly improved code readability and performance',
              "Analyzed and implemented i18n according to the application's needs and technology's compatibility",
              'Documented configuration and usage guides',
            ],
            usedTechnologies: [
              { name: SkillTechnologies.Angular },
              { name: SkillTechnologies.Html5 },
              { name: SkillTechnologies.GitLab },
              { name: SkillTechnologies.SASS },
              { name: SkillTechnologies.Gauge },
              { name: SkillTechnologies.Taiko },
            ],
          },
        ],
      },
      {
        companyName: 'IncluIT',
        companyUrl: 'https://incluit.com',
        startDate: '2021-02-01T00:00:00',
        endDate: '2022-01-01T00:00:00',
        projects: [
          {
            projectName: 'Back Office NX',
            jobTitle: 'Front End Developer',
            clientName: 'NaranjaX',
            jobDescriptionItems: [
              'Part of a team in charge of developing a back office web application',
              'Involved in UX decisions according to the application capabilities and team deadlines',
              'Front end referent on the team',
              "In charge of the app's migration from Angular v7 to v12",
              'In charge of redefining the structure of the app in order to make modules reusable',
              "In charge of the app's migration to shell-micro frontends",
              'In charge of helping other teams to start and integrate micro frontends on the shell',
            ],
            usedTechnologies: [
              { name: SkillTechnologies.Angular },
              { name: SkillTechnologies.Html5 },
              { name: SkillTechnologies.Jasmine },
              { name: SkillTechnologies.SASS },
              { name: SkillTechnologies.Karma },
              { name: SkillTechnologies.GitLab },
              { name: SkillTechnologies.NgRx },
            ],
          },
        ],
      },
    ];

    return of(experience);
  }
}
