import { profileCarSchema } from '@/schema';
import { getUser } from '@/services';
import { ProfileCarSchemaType, UserType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export const useProfileCar = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileCarSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(profileCarSchema),
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

  return { register, errors, handleSubmit, control, user: finalData };
};
