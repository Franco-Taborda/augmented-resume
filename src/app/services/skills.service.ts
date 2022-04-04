import { Injectable } from '@angular/core';
import { ISkillCategory } from 'components/skills/model/skill';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  getSkills(): Observable<ISkillCategory[]> {
    return of([
      {
        name: 'Programming Languages',
        skills: [
          {
            name: 'HTML5',
            logoSrc: `${environment.url}/assets/images/html5_logo.svg`,
            description: 'Used in almost all the projects I worked on, including personal projects, like this one',
            certificates: [
              {
                name: 'Responsive Web Design',
                url: 'https://www.freecodecamp.org/certification/franco-taborda/responsive-web-design',
              },
            ],
          },
          {
            name: 'CSS3',
            logoSrc: `${environment.url}/assets/images/css3_logo.svg`,
            description: 'Used in almost all the projects I worked on, including personal projects, like this one',
            certificates: [
              {
                name: 'Responsive Web Design',
                url: 'https://www.freecodecamp.org/certification/franco-taborda/responsive-web-design',
              },
            ],
          },
          {
            name: 'Javascript',
            logoSrc: `${environment.url}/assets/images/js_logo.svg`,
            description: 'Used mainly in learning projects and on some professional projects',
            certificates: [
              {
                name: 'JavaScript Algorithms and Data Structures',
                url: 'https://www.freecodecamp.org/certification/franco-taborda/javascript-algorithms-and-data-structures',
              },
            ],
          },
          {
            name: 'Typescript',
            logoSrc: `${environment.url}/assets/images/ts_logo.svg`,
            description: 'Used since I started working with Angular',
          },
        ],
      } as ISkillCategory,
      {
        name: 'Testing Tools',
        skills: [
          {
            name: 'Karma',
            logoSrc: `${environment.url}/assets/images/karma_logo.svg`,
            description: 'Used in Angular projects',
          },
          {
            name: 'Jasmine',
            logoSrc: `${environment.url}/assets/images/jasmine_logo.svg`,
            description: 'Used in Angular projects',
          },
          {
            name: 'Gauge',
            logoSrc: `${environment.url}/assets/images/gauge_logo-white.svg`,
            description: 'Used in some Angular projects',
          },
          {
            name: 'Taiko',
            logoSrc: `${environment.url}/assets/images/taiko_logo-circle_blue.svg`,
            description: 'Used in some Angular projects',
          },
        ],
      } as ISkillCategory,
      {
        name: 'Frameworks',
        skills: [
          {
            name: 'Angular +7',
            logoSrc: `${environment.url}/assets/images/angular_logo.svg`,
            description: 'The framework I have more experience with',
            certificates: [
              {
                name: 'Angular Core Deep Dive',
                url: 'https://www.udemy.com/certificate/UC-e68e0852-085e-4523-817f-a79cd4465a94/',
              },
            ],
          },
        ],
      } as ISkillCategory,
      {
        name: 'Other tools/libraries',
        skills: [
          {
            name: 'Angular PWA',
            logoSrc: `${environment.url}/assets/images/angular_pwa_logo.svg`,
            description: 'This app has been done using this knowledge',
            certificates: [
              {
                name: 'Angular Progressive Web Apps (PWA) MasterClass',
                url: 'https://www.udemy.com/certificate/UC-3cb7352f-4540-4359-9692-388fc952d78d/',
              },
            ],
          },
          {
            name: 'NgRx',
            logoSrc: `${environment.url}/assets/images/ngrx_logo.svg`,
            description: "Used mainly on companies projects I've worked on",
          },
          {
            name: 'SASS (SCSS)',
            logoSrc: `${environment.url}/assets/images/sass_logo.svg`,
            description: 'Used in almost all the projects I worked on, including personal projects, like this one',
          },
        ],
      } as ISkillCategory,
    ]);
  }
}
