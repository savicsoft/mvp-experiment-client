import { useAxios } from '@/hooks';
import { Navigate } from 'react-router-dom';
import { Dashboard } from '.';
import { useCountdownToLogin } from '@/hooks/useCountdownToLogin';

export const DefaultView = () => {
  const url: string = 'https://randomuser.me/api';
  const key: string = 'user-data';
  const { data, isLoading, isError, error } = useAxios(url, key);

  if (isLoading) {
    return (
      <div>
        <div className='text'>DefaultView</div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    useCountdownToLogin(5000, './login');
    return (
      <div>
        <div className='text'>DefaultView</div>
        <h2>{error.message}</h2>
      </div>
    );
  }

  //this is a highly specific data, that I used just for testing
  const token = data.data.results[0].login.uuid;

  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      <div className='text'>DefaultView</div>
      <Dashboard data={data} />
    </div>
  );
};
