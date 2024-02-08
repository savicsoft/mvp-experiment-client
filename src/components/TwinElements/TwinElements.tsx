export const TwinElements = ({ firstElement, secondElement }: any) => {
  return (
    <div className='input-field flex gap-4 w-full'>
      <div className='new-password flex-1 relative'>{firstElement}</div>
      <div className='conf-password flex-1 relative'>{secondElement}</div>
    </div>
  );
};
