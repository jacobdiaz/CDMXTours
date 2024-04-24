import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GuestSelectProps } from "./GuestSelectMobile";

const GuestSelectDesktop = ({
  price,
  whatsAppLink,
  minQuantity,
  maxQuantity = 9,
}: GuestSelectProps) => {
  const [quantity, setQuantity] = useState<number>(minQuantity);
  const [totalPrice, setTourPrice] = useState<number>(price);

  useEffect(() => {
    setTourPrice(price * quantity);
  }, [quantity]);

  return (
    <div className=' justify-between w-full text-xs md:text-md hidden md:block'>
      <div className='flex flex-row w-full justify-between items-center '>
        <select
          className='select select-bordered rounded-none'
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          {[...Array(maxQuantity - minQuantity + 1)].map((_, idx) => (
            <option key={idx} value={minQuantity + idx}>
              {minQuantity + idx} {minQuantity + idx === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>

        <div className='flex flex-col items-end'>
          <p>Total</p>
          <p className='font-black font-spartan text-base'>
            ${totalPrice?.toLocaleString()} <span>MXN</span>
          </p>
        </div>
      </div>

      <Link
        href={whatsAppLink(quantity, totalPrice)}
        target='_blank'
        className='btn rounded-none bg-black w-full my-5'
      >
        Book Your Tour
      </Link>
    </div>
  );
};

export default GuestSelectDesktop;
