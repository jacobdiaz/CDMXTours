import Link from "next/link";
import React, { useEffect, useState } from "react";
import Divider from "../layout/Divider";
import { useIntl } from "react-intl";

export type GuestSelectProps = {
  price?: number;
  maxQuantity?: number;
  minQuantity?: number;
  whatsAppLink: (quantity: number, totalPrice: number) => string;
  isRentalBike?: Boolean | undefined;
  isPrivateTour?: Boolean | undefined;
};

const GuestSelectMobile = ({
  price = 0,
  whatsAppLink,
  minQuantity = 0,
  maxQuantity = 0,
  isRentalBike,
  isPrivateTour
}: GuestSelectProps) => {
  const [quantity, setQuantity] = useState<number>(minQuantity || 1);
  const [ogPrice] = useState<number>(price || 0);
  const [totalPrice, setTotalPrice] = useState<number>(price || 0);
  const [selectedTime, setSelectedTime] = useState("2hrs");

  // Handler to update state when a radio button is selected
  const handleChange = (event: any) => {
    setSelectedTime(event.target.value);
  };
  const intl = useIntl();
  useEffect(() => {
    if (isRentalBike) {
      switch (selectedTime) {
        case "2hrs":
          setTotalPrice(quantity * 150);
          break;
        case "6hrs":
          setTotalPrice(quantity * 300);
          break;
        case "24hrs":
          setTotalPrice(quantity * 450);
          break;
        case "1 week":
          setTotalPrice(quantity * 1250);
          break;
      }
    } else {
      setTotalPrice(price * quantity);
    }
  }, [quantity, selectedTime, price, isRentalBike]);

  // Update total price when isPrivateTour changes
  useEffect(() => {
    if(isPrivateTour){
      setTotalPrice(() => (ogPrice * quantity) + 150);
    } else{
      setTotalPrice(ogPrice * quantity);
    }
  }, [isPrivateTour, quantity, ogPrice]);
  return (
    <div className="flex flex-col md:hidden items-center h-full w-full">
      {isRentalBike && (
        <div className="mb-2">
        {/* Radio buttons for selecting rental time */}
        <h5 className="text-lg font-bold mb-2">Select Rental Time (Hours)</h5>
        <div className="flex flex-row justify-center md:justify-start">
          <input
            type="radio"
            name="rentalTime"
            id="time1"
            value="2hrs"
            className="square-radio mr-2"
            onChange={handleChange}
            checked={selectedTime === "2hrs"}
          />
          <label htmlFor="time1" className="mr-4">
            2 Hrs
          </label>

          <input
            type="radio"
            name="rentalTime"
            id="time2"
            value="6hrs"
            className="square-radio mr-2"
            onChange={handleChange}
            checked={selectedTime === "6hrs"}
          />
          <label htmlFor="time2" className="mr-4">
            6 Hrs
          </label>

          <input
            type="radio"
            name="rentalTime"
            id="time3"
            value="24hrs"
            className="square-radio mr-2"
            onChange={handleChange}
            checked={selectedTime === "24hrs"}
          />
          <label htmlFor="time3" className="mr-4">
            24 Hrs
          </label>

          <input
            type="radio"
            name="rentalTime"
            id="time4"
            value="1 week"
            className="square-radio mr-2"
            onChange={handleChange}
            checked={selectedTime === "1 week"}
          />
          <label htmlFor="time4">{intl.formatMessage(
            { id: "rental.week" }
          )}</label>
        </div>
      </div>
      )}
      <div className="flex-row">
        <button
          className="btn-circle border rounded-md"
          onClick={() => {
            if (quantity >= minQuantity + 1) setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <span className="px-5 font-semibold">
          {quantity}{" "}
          {isRentalBike
            ? intl.formatMessage({ id: "rental.bike" })
            : intl.formatMessage({ id: "datepicker.guest" })}
        </span>
        <button
          className="btn-circle border rounded-md"
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
        className="btn rounded-md bg-green border-none w-full my-5"
      >
        {isRentalBike
          ? intl.formatMessage({ id: "rental.rent.cta" })
          : intl.formatMessage({ id: "tours.book.btn" })}
      </Link>
    </div>
  );
};

export default GuestSelectMobile;
