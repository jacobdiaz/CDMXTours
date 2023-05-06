import Link from "next/link";
import React, { useState } from "react";

type SelectProps = {
  price: number;
  maxQuantity: number;
  whatsAppLink: (q: number) => string;
};

const GuestSelectMobile = ({ maxQuantity, whatsAppLink }: SelectProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex flex-col md:hidden items-center h-full w-full'>
      <div className='flex-row'>
        <button
          className='btn-circle border'
          onClick={() => {
            if (quantity >= 2) setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <span className='px-5 font-semibold'>
          {quantity} {quantity === 1 ? "Guest" : "Guests"}
        </span>
        <button
          className='btn-circle border'
          onClick={() => {
            if (quantity < maxQuantity) setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </div>
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

export default GuestSelectMobile;
