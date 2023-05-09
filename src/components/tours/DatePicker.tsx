import Calendar from "react-calendar";
import React, { useState } from "react";
import GuestSelectDesktop from "./GuestSelectDesktop";
import GuestSelectMobile from "./GuestSelectMobile";
import { useIntl } from "react-intl";

type DatePickerProps = {
  availability: string;
  price: number;
  tourName: string;
  maxQuantity: number;
};
const DatePicker = ({
  availability,
  price,
  tourName,
  maxQuantity,
}: DatePickerProps) => {
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

  function setDisabledDates({ date, view }: { date: Date; view: string }) {
    const day = date.getDay();
    if (availability === "Weekday") {
      return view === "month" && (day === 6 || day === 0); // Disable weekends
    } else if (availability === "Weekend") {
      return view === "month" && day >= 1 && day <= 5; // Disable weekdays
    } else {
      return date === new Date();
    }
  }

  const availabilityText = () => {
    if (availability === "Weekday") {
      return "Tour is available on weekdays only";
    } else if (availability === "Weekend") {
      return "Tour is available on weekdays only";
    } else {
      return "By Reservation Only";
    }
  };

  // TODO Add Translations
  // TODO Create more media points for when it starts to shrink!
  return (
    <div className='w-full md:shadow-xl md:p-10 rounded-lg sticky top-56'>
      <h5 className='text-lg font-bold'>Select A Tour Date</h5>
      <p className='text-xs text-gray-500'>{availabilityText()}</p>
      <Calendar
        onChange={onCalendarChange}
        value={date}
        className='py-5'
        tileDisabled={setDisabledDates}
      />
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
