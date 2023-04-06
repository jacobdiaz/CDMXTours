const ReserveBar = ({
  price,
  capacity,
  onClick,
}: {
  price: Number;
  capacity: string;
  onClick?: () => void;
}) => {
  const handleReserve = () => {
    // onClick();
    // TODO open calendar
  };
  return (
    <div className='bg-white h-20 fixed bottom-0 w-full flex flex-row justify-between items-center px-7 md:hidden border-t-2'>
      <div>
        <p className='text-lg font-bold'>${price.toString()} MXN / Person</p>
        <p className='text-xs opacity-50'>
          Group Capacity {capacity} -{" "}
          <span className=''>Availability Pending</span>
        </p>
      </div>
      <button className='btn bg-primary rounded-none' onClick={handleReserve}>
        Reserve Tour
      </button>
    </div>
  );
};

export default ReserveBar;
