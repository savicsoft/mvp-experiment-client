import { communicationWillingness } from './communicationWilllingnessType';
import { musicPreferences } from './musicPreferencesType';
import { smokingPreferences } from './smokingPreferencesType';

export type carpoolingPreferences = {
  languagePreferences: string;
  musicPreferences: musicPreferences;
  smokingPreferences: smokingPreferences;
  communicationWillingness: communicationWillingness;
};
