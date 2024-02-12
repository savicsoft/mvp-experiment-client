import { profileSchema } from '@/schema';
import { getUser } from '@/services';
import { ProfileSchemaType, UserType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useProfile = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(profileSchema),
    shouldUnregister: true,
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueriesData<UserType>({ queryKey: ['user'] });

  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: user?.[0]?.[1] === undefined,
    staleTime: Infinity,
  });

  const finalData = (user.length > 0 ? user?.[0]?.[1] : userData) as
    | UserType
    | undefined;

  let completionLevel = 0;
  if (finalData?.name) completionLevel++;
  if (finalData?.email) completionLevel++;
  if (finalData?.phone) completionLevel++;
  if (finalData?.birthdate) completionLevel++;
  if (finalData?.gender) completionLevel++;

  const onSubmit = (data: ProfileSchemaType) => {
    setIsEditProfileOpen(false);
    console.log(data);
  };

  return {
    user: finalData,
    completionLevel,
    isEditProfileOpen,
    setIsEditProfileOpen,
    register,
    errors,
    handleSubmit,
    onSubmit,
    control,
  };
};
