import { IconType } from "react-icons";

export type TyTech = {
  icon: IconType;
  name: string;
};

export type TySkillCard = {
  cardColor: string;
  cardType: string;
  title: string;
  techs: TyTech[];
};

export interface SocialMedia {
  title: string;
  link: string;
  icon: IconType; // Correct type annotation for the icon property
}

export interface Tech {
  icon: IconType;
  name: string;
  color?: string;
}

export interface IskillCards {
  title: string;
  cardColor: string;
  techs: Tech[];
}

export interface Courses {
  title: string;
  skills?: string[];
}

export interface MajorCertificate {
  title: string;
  logo: string;
  certificate?: string;
  certLink?: string;
  percent: number;
  type: string;
  courseStatus: string;
  courses: Courses[];
}