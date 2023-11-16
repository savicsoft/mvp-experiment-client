import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useAxios = () => {
  const url = 'https://randomuser.me/api/1';

  const axiosGetData = () => {
    return axios.get(url);
  };

  if (url) {
    return useQuery({
      queryKey: ['user-data'],
      queryFn: () => axiosGetData(),
    });
  }
};
