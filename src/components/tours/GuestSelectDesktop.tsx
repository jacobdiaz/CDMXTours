import Link from "next/link";
import React, { useState } from "react";

type SelectProps = {
  maxQuantity: number;
  whatsAppLink: (q: number) => string;
};

const GuestSelect = ({ whatsAppLink, maxQuantity }: SelectProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex-row justify-between w-full text-xs md:text-md hidden md:block'>
      <select
        className='select select-bordered rounded-none'
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      >
        {[...Array(maxQuantity)].map((_, idx) => (
          <option key={idx} value={idx + 1}>
            {idx + 1} {idx + 1 === 1 ? "Guest" : "Guests"}
          </option>
        ))}
      </select>
      <Link
        href={whatsAppLink(quantity)}
        target='_blank'
        className='btn rounded-none bg-black w-full my-5'
      >
        Book Your Tour
      </Link>
    </div>
  );
};

export default GuestSelect;
