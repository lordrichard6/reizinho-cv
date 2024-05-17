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
