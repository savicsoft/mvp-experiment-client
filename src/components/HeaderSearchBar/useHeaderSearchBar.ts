import { SetStateAction, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HeaderSearchBarSchema } from '@/schema/HeaderSearchBarSchema';
import { HeaderSearchBarSchemaType } from '@/schema/type';

import { HeaderSearchBarPassangerType } from './HeaderSearchBarPassangersTypes';

export const useHeaderSearchBar = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [placeFrom, setPlaceFrom] = useState<string>('');
  const [placeTo, setPlaceTo] = useState<string>('');
  const [passangers, setPassangers] = useState({
    adults: 0,
    children: 0,
    pets: 0,
  });
  let totalPassangers =
    passangers.adults + passangers.children + passangers.pets;
  console.log(totalPassangers);
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
  const handleAddPassangers = (
    passanger: keyof HeaderSearchBarPassangerType,
  ) => {
    setPassangers((prevPassanger) => ({
      ...prevPassanger,
      adults:
        passanger === 'adults' ? passangers.adults + 1 : passangers.adults,
      children:
        passanger === 'children'
          ? passangers.children + 1
          : passangers.children,
      pets: passanger === 'pets' ? passangers.pets + 1 : passangers.pets,
    }));
  };

  const handleRemovePassangers = (
    passanger: keyof HeaderSearchBarPassangerType,
  ) => {
    setPassangers((prevPassanger) => ({
      ...prevPassanger,
      adults:
        passanger === 'adults' ? passangers.adults - 1 : passangers.adults,
      children:
        passanger === 'children'
          ? passangers.children - 1
          : passangers.children,
      pets: passanger === 'pets' ? passangers.pets - 1 : passangers.pets,
    }));
  };

  const { register, handleSubmit } = useForm<HeaderSearchBarSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(HeaderSearchBarSchema),
  });

  const onSubmit = (data: HeaderSearchBarSchemaType) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    date,
    placeFrom,
    placeTo,
    passangers,
    totalPassangers,
    setDate,
    onSubmit,
    handleChangeDate,
    handleAddPassangers,
    handleChangePlaceFrom,
    handleChangePlaceTo,
    handleRemovePassangers,
  };
};
