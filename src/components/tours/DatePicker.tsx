import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import GuestSelectDesktop from "./GuestSelectDesktop";
import GuestSelectMobile from "./GuestSelectMobile";
import { useIntl } from "react-intl";

// TODO Should there be available dates or common days?
type DatePickerProps = {
  // availableDates: Date[];
  price: number;
  tourName: string;
  maxQuantity: number;
};
const DatePicker = ({ price, tourName, maxQuantity }: DatePickerProps) => {
  const [date, setDate] = useState(new Date());
  const Intl = useIntl();

  const whatsAppLink = (quantity: number, totalPrice: number) => {
    const msg = `Hello Tours en Bici CDMX! \nI would like to book\nTour: ${Intl.formatMessage(
      { id: tourName }
    )}\nDate: ${date.toLocaleString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })} \nGuests: ${quantity}\nTotal: $${totalPrice} MXN`;

    return `https://wa.me/5215583333677?text=${encodeURI(msg)}`;
  };
  function onCalendarChange(nextValue: any) {
    setDate(nextValue);
  }

  // TODO Add Prices
  // TODO Create more media points for when it starts to shrink!
  // TODO look into a11y of form?
  return (
    <div className='w-full md:shadow-xl md:p-10 rounded-lg sticky top-56'>
      <h5 className='text-lg font-bold'>Select A Tour Date</h5>
      <Calendar onChange={onCalendarChange} value={date} className='py-5' />
      <div className='flex flex-row w-full justify-between'>
        <GuestSelectDesktop
          maxQuantity={maxQuantity}
          whatsAppLink={whatsAppLink}
          price={price}
        />
        <GuestSelectMobile
          maxQuantity={maxQuantity}
          whatsAppLink={whatsAppLink}
          price={price}
        />
      </div>
      <p className='text-xs opacity-50'>Availability Pending</p>
    </div>
  );
};

export default DatePicker;
