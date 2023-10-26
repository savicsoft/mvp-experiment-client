import { useTest } from './useTest';

export const Test = () => {
  const { data, isError, isLoading, getAnotherTodo } = useTest();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)} </pre>
      <br />
      <br />
      <br />
      <button onClick={getAnotherTodo}>get another todo</button>
    </div>
  );
};
