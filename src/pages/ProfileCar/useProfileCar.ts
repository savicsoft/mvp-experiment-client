import { profileCarSchema } from '@/schema';
import { ProfileCarSchemaType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
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

  return { register, errors, handleSubmit, control };
};
