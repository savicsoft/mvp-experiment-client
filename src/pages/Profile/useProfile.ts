import { getUser } from '@/services';
import { UserType } from '@/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useProfile = () => {
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

  return {
    user: finalData,
    completionLevel,
  };
};
