import Link from "next/link";
import React, { useEffect, useState } from "react";
import Divider from "../layout/Divider";

type SelectProps = {
  price: number;
  maxQuantity: number;
  whatsAppLink: (q: number) => string;
};

const GuestSelectMobile = ({
  price,
  whatsAppLink,
  maxQuantity,
}: SelectProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTourPrice] = useState<number>(price || 0);

  useEffect(() => {
    setTourPrice(price * quantity);
  }, [quantity]);

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
      <Divider />
      <div className='flex flex-row w-full justify-between'>
        <p>Total</p>
        <p className='font-bold font-fjalla text-base'>
          ${totalPrice?.toLocaleString()} <span>MXN</span>
        </p>
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
