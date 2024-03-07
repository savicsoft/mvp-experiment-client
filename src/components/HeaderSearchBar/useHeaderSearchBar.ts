import { SetStateAction, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from 'react-hook-form';
import { HeaderSearchBarPassengerType } from './HeaderSearchBarPassangersTypes';

export const useHeaderSearchBar = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [placeFrom, setPlaceFrom] = useState<string>('');
  const [placeTo, setPlaceTo] = useState<string>('');
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    pets: 0,
  });
  let totalPassengers =
    passengers.adults + passengers.children + passengers.pets;

  const handleChangeDate = () => (newValue: Dayjs) => setDate(newValue);
  const handleChangePlaceFrom = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPlaceFrom(e.target.value);
  };
  const handleChangePlaceTo = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPlaceTo(e.target.value);
  };
  const handleAddPassengers = (
    passanger: keyof HeaderSearchBarPassengerType,
  ) => {
    setPassengers((prevPassanger) => ({
      ...prevPassanger,
      adults:
        passanger === 'adults' ? passengers.adults + 1 : passengers.adults,
      children:
        passanger === 'children'
          ? passengers.children + 1
          : passengers.children,
      pets: passanger === 'pets' ? passengers.pets + 1 : passengers.pets,
    }));
  };

  const handleRemovePassengers = (
    passanger: keyof HeaderSearchBarPassengerType,
  ) => {
    setPassengers((prevPassanger) => ({
      ...prevPassanger,
      adults:
        passanger === 'adults' ? passengers.adults - 1 : passengers.adults,
      children:
        passanger === 'children'
          ? passengers.children - 1
          : passengers.children,
      pets: passanger === 'pets' ? passengers.pets - 1 : passengers.pets,
    }));
  };

  const { register, handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    control,
    date,
    placeFrom,
    placeTo,
    passengers,
    totalPassengers,
    isPassangersOpen,
    setDate,
    onSubmit,
    handleChangeDate,
    handleAddPassengers,
    handleChangePlaceFrom,
    handleChangePlaceTo,
    handleRemovePassengers,
  };
};
