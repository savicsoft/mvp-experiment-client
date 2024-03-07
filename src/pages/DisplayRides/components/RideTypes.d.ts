export type RideTypes = {
  user?: {
    name: string;
    surname: string;
    rating: number;
    image?: string;
  };
  ride?: {
    fromPlace: string;
    toPlace: string;
  };
  date?: string;
  time?: {
    startOfRide: string;
    endOfRide: string;
  };
  passangers?: number;
  price?: number;
  duration?: string;
};
