import { carpoolingPreferences } from './carPoolingPreferencesType';
import { carProfile } from './carProfileType';

export type user = userDriver & userProfile;

export type userDriver = 'Driver' | 'Passenger';

export type userProfile = {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  phoneNumber: number;
  dateOfBirth: number;
  country: string;
  city: string;
  carpoolingPreferences: carpoolingPreferences;
  car: carProfile;
};
