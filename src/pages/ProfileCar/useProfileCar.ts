import { profileCarSchema } from '@/schema';
import { getUser } from '@/services';
import { ProfileCarSchemaType, UserType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useProfileCar = () => {
  const queryClient = useQueryClient();
  const car = queryClient.getQueriesData<UserType>({
    queryKey: ['user'],
  })?.[0]?.[1]?.car;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<ProfileCarSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(profileCarSchema),
    shouldUnregister: true,
    defaultValues: {
      body_style: car?.body_style || '',
      brand: car?.brand || '',
      color: car?.color || '',
      fuel_efficiency: car?.fuel_efficiency || '',
      gas_type: car?.gas_type || '',
      model: car?.model || '',
      photos: car?.photos || [],
      registration_number: car?.registration_number || '',
      year: car?.year || '',
    },
  });

  const { data: fetchedData } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: car === undefined,
    staleTime: Infinity,
  });

  useEffect(() => {
    (
      Object.keys(fetchedData?.car || {}) as (keyof ProfileCarSchemaType)[]
    ).forEach((key) => setValue(key, fetchedData!.car![key]));
  }, [fetchedData, setValue]);

  const onSubmit = (data: ProfileCarSchemaType) => {
    console.log(data);
  };

  return { register, errors, handleSubmit, control, onSubmit, car };
};
