export type User = UserProfile & UserDriver;

export type UserDriver = 'Driver' | 'Passenger';

export type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  phoneNumber: number;
  dateOfBirth: string;
  country: string;
  city: string;
  carpoolingPreferences: carpoolingPreferences;
  car: string;
};

export type carpoolingPreferences = {
  languagePreferance: string;
  musicPreferences: musicPreferences;
  somkingPreferences: somkingPreferences;
  communicationWillingness: communicationWillingness;
};

export type musicPreferences =
  | 'No Music'
  | 'Low-Volume Music'
  | 'Loud Music Only';

export type somkingPreferences = 'No Smoking' | 'Smoking Allowed';

export type communicationWillingness =
  | 'Non-Talker'
  | 'Selective Talker'
  | 'Talkative';

export type carProfile = {
  picture: string[];
  registrationNumber: string;
  color: string;
  year: number;
  gasType: gasType;
  fuelEfficiency: number;
};

export type gasType = 'Dizel' | 'Petrol 100' | 'Petrol 95';
