import { useAxios } from '@/context';
import { Navigate, useNavigate } from 'react-router-dom';
import { Dashboard } from '.';

export const DefaultView = () => {
  const { data, isLoading, isError, error } = useAxios();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div>
        <div className='text'>DefaultView</div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    setTimeout(() => {
      navigate('/login');
    }, 5000);
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
