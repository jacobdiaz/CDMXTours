type Props = {
  question: string;
  children: React.ReactNode;
};

const FaqItem = ({ question, children }: Props) => {
  return (
    <div
      className='collapse  bg-[#F7F7F7] collapse-arrow rounded-none my-2'
      tabIndex={0}
    >
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium uppercase font-spartan'>
        {question}
      </div>
      <div className='collapse-content'>{children}</div>
    </div>
  );
};

export default FaqItem;
