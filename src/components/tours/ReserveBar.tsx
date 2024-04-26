import { useIntl } from "react-intl";
import { Tour } from "../../utils/toursdata";
import DatePicker from "./DatePicker";

const ReserveBar = ({ tourData }: { tourData: Tour }) => {
  const intl = useIntl();
  const bookText = intl.formatMessage({
    id: "tours.book.btn",
    defaultMessage: "Book Tour",
  });
  const personText = intl.formatMessage({
    id: "tours.person",
    defaultMessage: "Person",
  });
  return (
    <>
      <input type='checkbox' id='date-picker-modal' className='modal-toggle' />
      <label htmlFor='date-picker-modal' className='modal cursor-pointer'>
        {/* Modal */}
        <label className='modal-box relative p-10' htmlFor='date-picker-moda'>
          <div className='w-full flex justify-end'>
            <label
              htmlFor='date-picker-modal'
              className='btn btn-sm text-black bg-white'
            >
              ✕
            </label>
          </div>

          <DatePicker
            availability={tourData.availability}
            price={tourData.price}
            cap={parseInt(tourData.cap)}
            minGuests={parseInt(tourData.minGuests)}
            tourName={tourData.tourName}
          />
        </label>
      </label>
      <div className='bg-white h-20 fixed bottom-0 w-full flex flex-row justify-between items-center px-7 md:hidden border-t-2'>
        <div>
          <div>
            <p className='text-lg font-bold'>
              ${tourData.price.toString()} MXN / {personText}
            </p>
          </div>
          <p className='text-xs opacity-50'>Availability Pending</p>
        </div>
        <label
          htmlFor='date-picker-modal'
          className='btn bg-orange rounded-none border-none'
        >
          {bookText}
        </label>
      </div>
    </>
  );
};

export default ReserveBar;
