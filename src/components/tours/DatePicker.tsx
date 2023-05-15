import Calendar from "react-calendar";
import React, { useState } from "react";
import GuestSelectDesktop from "./GuestSelectDesktop";
import GuestSelectMobile from "./GuestSelectMobile";
import { useIntl } from "react-intl";
import { Tour } from "@/utils/toursdata";

type DatePickerType = {
  availability: {
    type: "Weekend" | "Weekday" | "Reservation";
    time?: string;
  };
  price: number;
  tourName: string;
  cap: number;
};

const DatePicker = ({ availability, price, tourName, cap }: DatePickerType) => {
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
    if (availability.type === "Weekday") {
      return view === "month" && (day === 6 || day === 0); // Disable weekends
    } else if (availability.type === "Weekend") {
      return view === "month" && day >= 1 && day <= 5; // Disable weekdays
    } else {
      return date === new Date();
    }
  }

  const availabilityText = () => {
    if (availability.type === "Weekday") {
      return "Tour is available on weekdays only";
    } else if (availability.type === "Weekend") {
      return "Tour is available on weekend days only";
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
      {availability.time && (
        <div className='flex justify-center md:justify-start'>
          <p className='text-xs py-2'>Time: {availability.time}</p>
        </div>
      )}
      <div className='flex flex-row w-full justify-between'>
        <GuestSelectDesktop
          maxQuantity={cap}
          whatsAppLink={whatsAppLink}
          price={price}
        />
        <GuestSelectMobile
          maxQuantity={cap}
          whatsAppLink={whatsAppLink}
          price={price}
        />
      </div>
      <p className='text-xs opacity-50'>Availability Pending</p>
    </div>
  );
};

export default DatePicker;
