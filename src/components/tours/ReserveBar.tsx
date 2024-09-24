import { useIntl } from "react-intl";
import { Tour } from "../../utils/toursdata";
import DatePicker from "./DatePicker";

const ReserveBar = ({
  tourData,
  isRentalBike,
}: {
  tourData?: Tour;
  isRentalBike: Boolean;
}) => {
  const intl = useIntl();
  const bookText = isRentalBike
    ? intl.formatMessage({
        id: "rental.rent.cta",
        defaultMessage: "Book Rental",
      })
    : intl.formatMessage({
        id: "tours.book.btn",
        defaultMessage: "Book Tour",
      });
  const personText = intl.formatMessage({
    id: "tours.person",
    defaultMessage: "Person",
  });
  return (
    <>
      <input type="checkbox" id="date-picker-modal" className="modal-toggle" />
      <label htmlFor="date-picker-modal" className="modal cursor-pointer">
        {/* Modal */}
        <label className="modal-box relative p-10" htmlFor="date-picker-moda">
          <div className="w-full flex justify-end">
            <label
              htmlFor="date-picker-modal"
              className="btn btn-sm text-black bg-white"
            >
              ✕
            </label>
          </div>
          <DatePicker
            availability={tourData?.availability}
            price={tourData?.price}
            cap={parseInt(tourData?.cap ?? "") || 10}
            minGuests={parseInt(tourData?.minGuests ?? "") || 1}
            tourName={tourData?.tourName}
            isRentalBike={isRentalBike}
          />
        </label>
      </label>
      <div className="bg-white h-20 fixed bottom-0 w-full flex flex-row justify-between items-center px-7 md:hidden border-t-2">
        <div>
          <div>
            {!isRentalBike && (
              <p className="text-lg font-bold">
                ${tourData?.price.toString()} MXN / {personText}
              </p>
            )}
          </div>
        </div>
        <label
          htmlFor="date-picker-modal"
          className={`btn bg-green rounded-none border-none ${
            isRentalBike ? "w-full" : ""
          } `}
        >
          {bookText}
        </label>
      </div>
    </>
  );
};

export default ReserveBar;
