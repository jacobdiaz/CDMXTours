import Link from "next/link";
import React, { useEffect, useState } from "react";

type SelectProps = {
  price: number;
  maxQuantity: number;
  whatsAppLink: (quantity: number, totalPrice: number) => string;
};

const GuestSelectDesktop = ({
  price,
  whatsAppLink,
  maxQuantity = 9,
}: SelectProps) => {
  const [quantity, setQuantity] = useState<number>(1);
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
          {[...Array(maxQuantity)].map((_, idx) => (
            <option key={idx} value={idx + 1}>
              {idx + 1} {idx + 1 === 1 ? "Guest" : "Guests"}
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
