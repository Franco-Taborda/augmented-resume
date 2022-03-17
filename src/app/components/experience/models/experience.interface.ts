import { SkillTechnologies } from 'components/skills/enums/skills.enum';

export interface IExperience {
  companyName: string;
  companyUrl: string;
  startDate: string | Date;
  endDate: string | Date;
  projects: IExperienceProject[];
}

export interface IExperienceProject {
  projectName: string;
  jobTitle?: string;
  clientName?: string;
  jobDescriptionItems: string[];
  usedTechnologies: IExperienceTechnology[];
}

export interface IExperienceTechnology {
  name: SkillTechnologies;
  imgSrc?: string;
}
