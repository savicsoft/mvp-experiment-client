import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HeaderSearchBarSchema } from '@/schema/HeaderSearchBarSchema';
import { HeaderSearchBarSchemaType } from '@/schema/type';

export const useHeaderSearchBar = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));

  const handleChangeDate = () => (newValue: Dayjs) => setDate(newValue);

  const { register, handleSubmit } = useForm<HeaderSearchBarSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(HeaderSearchBarSchema),
  });

  const onSubmit = (data: HeaderSearchBarSchemaType) => {
    console.log(data);
  };

  return { register, handleSubmit, date, setDate, handleChangeDate, onSubmit };
};
