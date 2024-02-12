import { RideTypes } from '@/pages/DisplayRides/components/RideTypes';

export const getRideService = () => {
  return Promise.resolve({
    user: {
      name: 'josh',
      surname: 'donalds',
      rating: 5,
      image: '/images/profile-banner.png',
    },
    ride: {
      fromPlace: 'Belgrade',
      toPlace: 'Nis',
    },
    date: 'Febuary 9th, 2024',
    time: {
      startOfRide: '07:00',
      endOfRide: '9:45',
    },
    passangers: 2,
    duration: '2.45h',
    price: 60,
  } as RideTypes);
};
