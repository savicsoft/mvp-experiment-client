import { getTodo } from '@/services';
import { TodoType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useTest = () => {
  const [id, setId] = useState<number>(1);

  const { data, isLoading, isError } = useQuery<TodoType>({
    queryKey: ['todo', id],
    queryFn: () => getTodo(id),
  });

  const getAnotherTodo = () => setId((prev) => prev + 1);

  return {
    data,
    isLoading,
    isError,
    getAnotherTodo,
  };
};
