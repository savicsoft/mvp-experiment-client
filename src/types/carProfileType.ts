import { gasType } from './gasType';

export type carProfile = {
  picture: string[];
  registrationNumber: string;
  color: string;
  year: number;
  gasType: gasType;
  fullEfficiency: number;
};
