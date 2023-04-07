import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Link from "next/link";

// TODO Should there be available dates or common days?
type DatePickerProps = {
  // availableDates: Date[];
  tourName: string;
  maxQuantity: number;
};
const DatePicker = ({ tourName, maxQuantity }: DatePickerProps) => {
  const [date, setDate] = useState(new Date());
  const [quantity, setQuantity] = useState(1);

  const whatsAppMsg = `Hello Tours en Bici CDMX! \nI would like to schedule a ${tourName} on ${date.toLocaleString(
    "en-US",
    { weekday: "long", day: "numeric", month: "long" }
  )} for ${quantity} guest(s).`;
  const whatsAppNumber = "5215583333677";
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodeURI(
    whatsAppMsg
  )}`;

  function onCalendarChange(nextValue: any) {
    setDate(nextValue);
  }

  // TODO Create more media points for when it starts to shrink!
  // TODO look into a11y of form?
  return (
    <div className='w-full md:shadow-xl md:p-10 rounded-lg sticky top-56'>
      <h5 className='text-lg font-bold'>Select A Tour Date</h5>
      <Calendar onChange={onCalendarChange} value={date} className='py-5' />
      <div className='flex flex-row '>
        <div className='flex-row justify-between w-full'>
          <select
            className='select select-bordered w-fit h-fit rounded-none'
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            {[...Array(maxQuantity)].map((_, idx) => (
              <option key={idx} value={idx + 1}>
                {idx + 1} {idx + 1 === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
        <Link
          href={whatsAppLink}
          target='_blank'
          className='btn rounded-none bg-primary'
        >
          Book Your Tour
        </Link>
      </div>
      <p className='text-xs opacity-50'>Availability Pending</p>
    </div>
  );
};

export default DatePicker;
