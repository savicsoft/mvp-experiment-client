import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useAxios(url: string, key: string) {
  const axiosGetData = () => {
    return axios.get(url);
  };

  if (url) {
    return useQuery({
      queryKey: [key],
      queryFn: () => axiosGetData(),
    });
  }
}
