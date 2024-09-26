import Calendar from "react-calendar";
import React, { useState } from "react";
import GuestSelectDesktop from "./GuestSelectDesktop";
import GuestSelectMobile from "./GuestSelectMobile";
import { useIntl } from "react-intl";

type DatePickerType = {
  availability?: {
    type: "Weekend" | "Weekday" | "Reservation" | number[];
    time?: string[];
  };
  price?: number;
  tourName?: string;
  cap?: number;
  minGuests?: number;
  isRentalBike?: Boolean | undefined;
};

const DatePicker = ({
  availability,
  price,
  tourName,
  cap,
  minGuests,
  isRentalBike,
}: DatePickerType) => {
  // create a var to store tomorrows date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  // const [selectedTourTime, setSelectedTourTime] = useState("");
  const [selectedGroupOrPrivate, setSelectedGroupOrPrivate] = useState<"group" | "private">("group");
  const [date, setDate] = useState(tomorrow);
  const Intl = useIntl();

  const rentalPhoneNumnber = "525614720497";
  const tourPhoneNumber = "5215583333677";
  const whatsAppLink = (quantity: number, totalPrice: number) => {
    if (isRentalBike) {
      const rentalMsg = intl.formatMessage(
        { id: "rental_whatsapp_msg" },
        {
          quantity,
          date: date.toLocaleString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
          }),
          totalPrice,
        }
      );

      const encodedMsg = encodeURIComponent(rentalMsg);
      return `https://wa.me/${
        isRentalBike ? rentalPhoneNumnber : tourPhoneNumber
      }?text=${encodedMsg}`;
    }

    const tour = Intl.formatMessage({ id: tourName });

    const msgEn = `Hello Tours en Bici CDMX! \nI would like to book\nTour: ${tour}\nDate: ${date.toLocaleString(
      "en-US",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
      }
    )} ${selectedGroupOrPrivate === 'group' ? "Group Tour ": "Private Tour " }\nGuests: ${quantity}\nTotal: $${totalPrice} MXN`;

    const msgEs = `Hola Tours en Bici CDMX! \nMe gustaría reservar\nTour: ${Intl.formatMessage(
      { id: tourName }
    )}\nFecha: ${date.toLocaleString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })} ${selectedGroupOrPrivate === 'group' ? "Group Tour ": "Private Tour" }nInvitados: ${quantity}\nTotal: $${totalPrice} MXN`;

    const encodedMsg = encodeURIComponent(Intl.locale === "en" ? msgEn : msgEs);
    return `https://wa.me/5215583333677?text=${encodedMsg}`;
  };
  function onCalendarChange(nextValue: any) {
    setDate(nextValue);
  }

  function setDisabledDates({ date, view }: { date: Date; view: string }) {
    const day = date.getDay();

    // if type == [number] then it is an array of days that are available
    if (Array.isArray(availability?.type)) {
      return view === "month" && !availability?.type.includes(day);
    } else if (availability?.type === "Weekday") {
      return view === "month" && (day === 6 || day === 0); // Disable weekends
    } else if (availability?.type === "Weekend") {
      return view === "month" && day >= 1 && day <= 5; // Disable weekdays
    } else {
      return date === new Date();
    }
  }

  const availabilityText = () => {
    if (intl.locale === "en") {
      if (availability?.type === "Reservation") {
        return "By Reservation Only";
      }
    } else {
      if (availability?.type === "Reservation") {
        return "Solo por reservación";
      }
    }
  };

  const intl = useIntl();
  // TODO Add Translations
  // TODO Create more media points for when it starts to shrink!
  return (
    <div className="w-full md:shadow-xl md:p-10 rounded-lg sticky top-56">
      <h5 className="text-lg font-bold">
        {intl.formatMessage({ id: "datepicker.select_date" })}
      </h5>
      <p className="text-xs text-gray-500">{availabilityText()}</p>
      <Calendar
        onChange={onCalendarChange}
        value={date}
        className="py-5"
        tileDisabled={setDisabledDates}
      />

      {/* Tour Time */}
      {
        // availability?.time && !isRentalBike && (
        //   <>
        //     <div className="flex justify-center md:justify-start">
        //       <p className="text-xs py-2">
        //         {intl.formatMessage({ id: "tours.select_time" })}
        //       </p>
        //     </div>
        //     {/* Create a select for availability.time */}
        //     {availability.time && Array.isArray(availability.time) && (
        //       <div className="flex flex-row justify-center md:justify-start mb-5">
        //         {availability.time.map((time) => (
        //           <button
        //             key={time}
        //             className={`p-4 border  rounded-md ${
        //               time === selectedTourTime ? "bg-black text-white" : ""
        //             }`}
        //             onClick={() => {
        //               setSelectedTourTime(time);
        //             }}
        //           >
        //             {time}
        //           </button>
        //         ))}
        //       </div>
        //     )}
        //   </>
        // )
      }

      {/* Group or Private */}

      <div className="flex flex-row w-full justify-evenly mb-5">
        <button
          onClick={() => setSelectedGroupOrPrivate("group")}
          className={`p-4 border rounded-md ${
            selectedGroupOrPrivate === "group" ? "bg-green text-white" : ""
          }`}
        >
          {intl.formatMessage({
            id: "datepicker.group",
            defaultMessage: "Group",
          })}
        </button>
        <button
          onClick={() => setSelectedGroupOrPrivate("private")}
          className={`p-4 border  rounded-md ${
          selectedGroupOrPrivate === "private" ? "bg-green text-white" : ""
          }`}
        >
          {intl.formatMessage({
            id: "datepicker.private",
            defaultMessage: "Private",
          })}
        </button>
      </div>

      <div className="flex flex-row w-full justify-between">
        <GuestSelectDesktop
          maxQuantity={cap}
          whatsAppLink={whatsAppLink}
          minQuantity={minGuests}
          price={price}
          isRentalBike={isRentalBike}
        />
        <GuestSelectMobile
          maxQuantity={cap}
          minQuantity={minGuests}
          whatsAppLink={whatsAppLink}
          price={price}
          isRentalBike={isRentalBike}
        />
      </div>
      <p className="text-xs opacity-50">
        {isRentalBike
          ? intl.formatMessage({ id: "rental.deposit" })
          : intl.formatMessage({ id: "rental.availability_pending" })}
      </p>
    </div>
  );
};

export default DatePicker;
