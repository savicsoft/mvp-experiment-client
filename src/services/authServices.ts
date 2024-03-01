import { UserType } from '@/types';

export const getUser = () => {
  //   I'm just mocking data as if we are actually getting from backend. this should be changed after we have endpoints.
  return Promise.resolve({
    name: 'username',
    surname: 'surname',
    // image: '/images/profile-banner.png',
    email: 'example@test.com',
    phone: '12345678910',
    birthdate: '01/01/1999',
    rating: '3.5',
    country: 'uk',
    gender: 'male',
    about: 'about me',
    car: {
      registration_number: '234',
      brand: 'car',
      model: 'model',
      year: '1234',
      body_style: 'second',
      gas_type: 'first',
      fuel_efficiency: '1',
      color: 'red',
      photos: [
        '/images/profile-banner.png',
        '/images/carkey-passed.png',
        '/images/field_error.png',
      ],
    },
  } as UserType);
};
