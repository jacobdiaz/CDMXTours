import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GuestSelectProps } from "./GuestSelectMobile";
import { useIntl } from "react-intl";

const GuestSelectDesktop = ({
  price = 0,
  whatsAppLink,
  minQuantity = 1,
  maxQuantity = 9,
  isRentalBike,
  isPrivateTour,
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
    // Rental bike prices
    if (isRentalBike) {
      switch (selectedTime) {
        case "2hrs":
          setTotalPrice(quantity * 150);
          break;
        case "4hrs":
          setTotalPrice(quantity * 250);
          break;
          case "6hrs":
          setTotalPrice(quantity * 350);
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
    if (!isRentalBike) {
      if(isPrivateTour){
        setTotalPrice(() => (ogPrice * quantity) + (quantity * 150));
      } else{
        setTotalPrice(ogPrice * quantity);
      }
    }
  }, [isPrivateTour, quantity, ogPrice]);

  return (
    <div className=" justify-between w-full text-xs md:text-md hidden md:block">
      {isRentalBike && (
        // select time for rental bike
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
            value="4hrs"
            className="square-radio mr-2 flex-wrap"
            onChange={handleChange}
            checked={selectedTime === "4hrs"}
          />
          <label htmlFor="time2" className="mr-4">
            4 Hrs
          </label>

          <input
            type="radio"
            name="rentalTime"
            id="time3"
            value="6hrs"
            className="square-radio mr-2"
            onChange={handleChange}
            checked={selectedTime === "6hrs"}
          />
          <label htmlFor="time3" className="mr-4">
            6 Hrs
          </label>

          <input
            type="radio"
            name="rentalTime"
            id="time4"
            value="24hrs"
            className="square-radio mr-2"
            onChange={handleChange}
            checked={selectedTime === "24hrs"}
          />
          <label htmlFor="time4" className="mr-4">
            24 Hrs
          </label>

          <input
            type="radio"
            name="rentalTime"
            id="time5"
            value="1 week"
            className="square-radio mr-2"
            onChange={handleChange}
            checked={selectedTime === "1 week"}
          />
          <label htmlFor="time5">{intl.formatMessage(
            { id: "rental.week" }
          )}</label>
        </div>
        </div>
      )}
      <div className="flex flex-row w-full justify-between items-center ">
        <select
          className="select select-bordered rounded-md"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          {[...Array(maxQuantity - minQuantity + 1)].map((_, idx) => {
            const unitSingle = isRentalBike ? "Bike" : "Guest";
            const unitPlural = isRentalBike ? "Bikes" : "Guests";

            return (
              <option key={idx} value={minQuantity + idx}>
                {minQuantity + idx}{" "}
                {minQuantity + idx === 1 ? unitSingle : unitPlural}
              </option>
            );
          })}
        </select>

        <div className="flex flex-col items-end">
          <p>Total</p>
          <p className="font-black font-spartan text-base">
            ${totalPrice?.toLocaleString()} <span>MXN</span>
          </p>
        </div>
      </div>

      <Link
        href={whatsAppLink(quantity, totalPrice)}
        target="_blank"
        className="btn rounded-md bg-green border-none w-full my-5 hover:bg-green hover:opacity-80"
      >
        {isRentalBike
          ? intl.formatMessage({ id: "rental.rent.cta" })
          : intl.formatMessage({ id: "tours.book.btn" })}
      </Link>
    </div>
  );
};

export default GuestSelectDesktop;
