export interface ISkill {
  name: string;
  logoSrc: string;
  description: string;
  certificates: ISkillCertificate[];
}

export interface ISkillCategory {
  name: string;
  skills: ISkill[];
}

export interface ISkillCertificate {
  name: string;
  url: string;
}
