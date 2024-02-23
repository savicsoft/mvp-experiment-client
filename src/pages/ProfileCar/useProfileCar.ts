import { profileCarSchema } from '@/schema';
import { getUser } from '@/services';
import { ProfileCarSchemaType, UserType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useProfileCar = () => {
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
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueriesData<UserType>({ queryKey: ['user'] });

  const { data: fetchedData } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: user?.[0]?.[1] === undefined,
    staleTime: Infinity,
  });

  useEffect(() => {
    (
      Object.keys(fetchedData?.car || {}) as (keyof ProfileCarSchemaType)[]
    ).forEach((key) => setValue(key, fetchedData!.car![key]));
  }, [fetchedData, setValue]);

  const finalData = (user.length > 0 ? user?.[0]?.[1] : fetchedData) as
    | UserType
    | undefined;

  return { register, errors, handleSubmit, control, finalData };
};
