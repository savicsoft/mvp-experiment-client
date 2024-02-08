import { useRevealPass } from '@/hooks';
import { signUpSchema } from '@/schema';
import { InputsType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const TwinPassInput = () => {
  const { revPass, setRevPass } = useRevealPass();

  const form = useForm<InputsType>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className='input-field flex gap-4 w-full'>
      <div className='new-password flex-1 relative'>
        <img
          onClick={() => setRevPass(!revPass)}
          src={revPass ? `\\images\\eye-open.svg` : `\\images\\eye-close.svg`}
          alt='eye-icon'
          className='absolute right-3 top-4'
        />
        <input
          {...register('password')}
          placeholder='New Password'
          type={revPass ? 'text' : 'password'}
          className='text-black w-full rounded-lg border border-black p-4 mb-3'
        />
        <p>{errors.password?.message}</p>
      </div>
      <div className='conf-password flex-1 relative'>
        <img
          onClick={() => setRevPass(!revPass)}
          src={revPass ? `\\images\\eye-open.svg` : `\\images\\eye-close.svg`}
          alt='eye-icon'
          className='absolute right-3 top-4'
        />
        <input
          {...register('validatePassword')}
          placeholder='Confirm Password'
          type={revPass ? 'text' : 'password'}
          className='text-black w-full rounded-lg border border-black p-4 mb-3'
        />
        <p>{errors.validatePassword?.message}</p>
      </div>
    </div>
  );
};
