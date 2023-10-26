import { api } from '@/services';
import { TodoType } from '@/types';

export const getTodo = (id: number) =>
  api.get<TodoType>(`/todos/${id}`).then((res) => res.data);
