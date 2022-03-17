import { IExperience } from 'components/experience/models/experience.interface';
import { SkillTechnologies } from 'components/skills/enums/skills.enum';

export const EXPERIENCE_MOCK: IExperience[] = [
  {
    companyName: 'Test',
    companyUrl: 'https://test/',
    startDate: '2000-01-01T00:00:00',
    endDate: '2000-01-01T00:00:00',
    projects: [
      {
        jobTitle: 'Test job title',
        clientName: 'Test project Client Name',
        projectName: 'Test Project Name',
        jobDescriptionItems: ['test item', 'test item', 'test item'],
        usedTechnologies: [
          { name: SkillTechnologies.Html5 },
          { name: SkillTechnologies.CSS3 },
          { name: SkillTechnologies.Jasmine },
        ],
      },
    ],
  },
  {
    companyName: 'Test 2',
    companyUrl: 'https://test/',
    startDate: '2000-01-01T00:00:00',
    endDate: '2000-01-01T00:00:00',

    projects: [
      {
        jobTitle: 'Test job title',
        clientName: 'Test project Client Name',
        projectName: 'Test Project Name',
        jobDescriptionItems: ['test item', 'test item', 'test item'],
        usedTechnologies: [{ name: SkillTechnologies.Angular }],
      },
    ],
  },
];
