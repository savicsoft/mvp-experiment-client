export type UserType = {
  name: string;
  surname: string;
  image?: string;
  email: string;
  phone: string;
  birthdate?: dayjs.Dayjs;
  country?: string;
  gender?: string;
  about?: string;
  rating?: string;
  car?: {
    registration_number: string;
    brand: string;
    model: string;
    year: string;
    body_style: string;
    gas_type: string;
    fuel_efficiency: string;
    color: string;
    photos: string[];
  };
};
