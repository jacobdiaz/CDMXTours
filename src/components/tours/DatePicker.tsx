import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Link from "next/link";

// TODO Should there be available dates or common days?
type DatePickerProps = {
  // availableDates: Date[];
  maxQuantity: number;
};
const DatePicker = ({ maxQuantity }: DatePickerProps) => {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue: any) {
    setValue(nextValue);
  }

  // TODO Create more media points for when it starts to shrink!
  // TODO look into a11y of form?
  return (
    <div className='w-full shadow-xl p-10 rounded-lg sticky top-56'>
      <h5 className='text-lg font-bold'>Select A Tour Date</h5>
      <Calendar onChange={onChange} value={value} className='py-5' />
      <div className='flex flex-row '>
        <div className='flex-row justify-between w-full'>
          <select className='select select-bordered w-fit h-fit rounded-none'>
            {[...Array(maxQuantity)].map((_, idx) => (
              <option key={idx} value={idx + 1}>
                {idx + 1} {idx + 1 === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
        <Link href='/' className='btn rounded-none bg-primary'>
          Book Your Tour
        </Link>
      </div>
      <p className='text-xs opacity-50'>Availability Pending</p>
    </div>
  );
};

export default DatePicker;
