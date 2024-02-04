import { UserType } from '@/types';

export const getUser = () => {
  //   I'm just mocking data as if we are actually getting from backend. this should be changed after we have endpoints.
  return Promise.resolve({
    name: 'username',
    surname: 'surname',
    image: '/images/profile-banner.png',
    email: 'example@test.com',
    phone: '+12312345678910',
    // birthdate: '01/01/1999',
    country: 'country',
    gender: 'male',
    about: 'about me',
    car: {
      registration_number: '234',
      brand: 'car',
      model: 'model',
      year: '1234',
      body_style: 'body style',
      gas_type: 'gas_type',
      fuel_efficiency: 24,
      color: 'red',
      photos: [
        '/images/profile-banner.png',
        '/images/profile-banner.png',
        '/images/profile-banner.png',
      ],
    },
  } as UserType);
};
