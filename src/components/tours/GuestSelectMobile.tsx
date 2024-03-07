import Link from "next/link";
import React, { useEffect, useState } from "react";
import Divider from "../layout/Divider";
import { useIntl } from "react-intl";

type SelectProps = {
  price: number;
  maxQuantity: number;
  whatsAppLink: (quantity: number, totalPrice: number) => string;
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

  const intl = useIntl();
  return (
    <div className="flex flex-col md:hidden items-center h-full w-full">
      <div className="flex-row">
        <button
          className="btn-circle border"
          onClick={() => {
            if (quantity >= 2) setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <span className="px-5 font-semibold">
          {quantity} {intl.formatMessage({ id: "datepicker.guest" })}
        </span>
        <button
          className="btn-circle border"
          onClick={() => {
            if (quantity < maxQuantity) setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </div>
      <Divider />
      <div className="flex flex-row w-full justify-between">
        <p>Total</p>
        <p className="font-black font-spartan text-base">
          ${totalPrice?.toLocaleString()} <span>MXN</span>
        </p>
      </div>
      <Link
        href={whatsAppLink(quantity, totalPrice)}
        target="_blank"
        className="btn rounded-none bg-black w-full my-5"
      >
        {intl.formatMessage({ id: "tours.book.btn" })}
      </Link>
    </div>
  );
};

export default GuestSelectMobile;
