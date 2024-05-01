import Divider from "@/components/layout/Divider";
import PageHeader from "@/components/layout/PageHeader";

import DatePicker from "@/components/tours/DatePicker";
import ReserveBar from "@/components/tours/ReserveBar";
import TourSection from "@/components/tours/TourSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

type Props = {};

const BikeRentalsPage = (props: Props) => {
  const title = "Bike Rentals in Mexico City";
  return (
    <>
      <PageHeader type="article" url_path="book-a-tour">
        <title>{title}</title>
        <meta property="og:title" content="Book A Tour" />
      </PageHeader>

      <div className="page-container">
        <div className="w-full mt-16 md:mt-24 flex flex-col md:flex-row font-spartan font-bold md:items-center justify-between">
          <div className="flex flex-col w-full">
            <Link
              href="/"
              className="text-black opacity-40 flex flex-row py-5 font-medium font-ssp underline w-fit"
            >
              <span className="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
                </svg>
              </span>
              Back
            </Link>
            <div className="w-full flex justify-between mb-5">
              <h1 className="text-4xl ">Bicycle Rental</h1>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="w-full">
          <Image
            src="https://d252kj1i9nz0td.cloudfront.net/bike.jpeg"
            alt="Bike Rentals in Mexico City"
            layout="responsive"
            width={800} // This is the aspect ratio width
            height={200} // This is the aspect ratio height
            className="w-full"
          />
        </div>
        {/* Tour Content */}
        <div className="md:grid grid-cols-3 pt-10 gap-5">
          {/* Col 1 */}
          <div className="col-span-2 md:pr-10">
            <TourSection title={"Rent a Bike!"}>
              <p>
                Pedal through the culture and colors of Mexico City with our
                reliable rental bikes. Each bike is maintained to the highest
                standards to ensure a safe and comfortable ride as you explore
                CDMX. Conveniently located and easy to book, our bikes come with
                flexible rental options to suit all your travel needs.
                Experience Mexico City like never before—up close and at your
                own pace, with the freedom and joy of biking!
              </p>
            </TourSection>

            {/* Whats Included & Group Capacity */}
            <div className="flex flex-row gap-1 md:gap-0">
              <TourSection
                title={"Requirements"}
                hideDivider
                className="max-w-[180px] md:max-w-[450px]"
              >
                <ul>
                  <li className="list-disc ml-3">
                    Valid Identification Documents (INE, Passport, License).
                  </li>
                  <li className="list-disc ml-3">
                    Must sign a safety and liability waiver to rent a bicycle.
                  </li>
                </ul>
              </TourSection>
              <Divider orientation="vertical" />
              <TourSection
                title={"Cost"}
                hideDivider
                // className="hidden md:block"
              >
                <ul>
                  <li>
                    1 Hour : <span className="font-bold">$80 MXN</span>
                  </li>
                  <li>
                    2 Hours : <span className="font-bold">$150 MXN</span>
                  </li>
                  <li>
                    5 Hours : <span className="font-bold">$250 MXN</span>
                  </li>
                  <li>
                    24 Hours : <span className="font-bold">$300 MXN</span>
                  </li>
                </ul>
              </TourSection>
            </div>
            <Divider />

            {/* Allowed Areas */}
            <TourSection title={"Allowed Areas"}>
              <ul className="columns-2">
                <li className="list-disc ml-3">REFORMA</li>
                <li className="list-disc ml-3">CHAPULTEPEC</li>
                <li className="list-disc ml-3">CENTRO HISTÓRICO</li>
                <li className="list-disc ml-3">ROMA NORTE</li>
                <li className="list-disc ml-3">CONDESA</li>
                <li className="list-disc ml-3">POLANCO</li>
                <li className="list-disc ml-3">DEL VALLE</li>
                <li className="list-disc ml-3">COYOACÁN</li>
                <li className="list-disc ml-3">CIUDAD UNIVERSIATARIA</li>
              </ul>
            </TourSection>

            {/* Deposit */}
            <TourSection title={"Deposit"}>
              <p className="mb-2 italic">
                * A deposit of $500 MXN is required for each bike rented and
                will be returned upon the return of the bike.
              </p>
            </TourSection>

            {/* Included */}
            <TourSection title={"Included"} hideDivider>
              <ul>
                <li className="list-disc ml-3">Bicycle</li>
                <li className="list-disc ml-3">Helmet & Safety Vest</li>
                <li className="list-disc ml-3">Bicycle Padlock</li>
              </ul>
            </TourSection>
            <Divider />
          </div>

          <div className="hidden md:block ">
            <DatePicker
              availability={{
                type: [0, 1, 2, 3, 4, 5, 6],
              }}
              price={200}
              tourName={"Bike Rental"}
              cap={10}
              minGuests={1}
              isRentalBike={true}
            />
          </div>
        </div>
      </div>
      {/* Mobile Reserve Bar */}
      <ReserveBar isRentalBike={true} />
    </>
  );
};

export default BikeRentalsPage;
