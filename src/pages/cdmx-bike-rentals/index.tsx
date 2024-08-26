import Divider from "@/components/layout/Divider";
import PageHeader from "@/components/layout/PageHeader";

import DatePicker from "@/components/tours/DatePicker";
import ReserveBar from "@/components/tours/ReserveBar";
import TourSection from "@/components/tours/TourSection";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

const BikeRentalsPage = (props: Props) => {
  const title = "Bike Rentals in Mexico City";
  const intl = useIntl();

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const sources = [
    "https://d252kj1i9nz0td.cloudfront.net/bike.jpeg",
    "https://d252kj1i9nz0td.cloudfront.net/rental/rental_1.jpg",
    "https://d252kj1i9nz0td.cloudfront.net/rental/rental_2.jpg",
    "https://d252kj1i9nz0td.cloudfront.net/rental/rental_3.jpg",
  ];
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
              <h1 className="text-4xl ">
                {intl.formatMessage({ id: "rental.title" })}
              </h1>
            </div>
          </div>
        </div>

        {/* Images */}
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={sources}
          slide={lightboxController.slide}
          loadOnlyCurrentSource={true}
        />

        <div className="w-full">
          {/* Biggest image */}
          <div className="container md:grid grid-cols-2 gap-2 mx-auto">
            <div
              className="col-span-1 max-h-[35rem]"
              onClick={() => openLightboxOnSlide(1)}
            >
              <Image
                src="https://d252kj1i9nz0td.cloudfront.net/bike.jpeg"
                alt="Bike Rentals in Mexico City"
                layout="responsive"
                width={1080} // This is the aspect ratio width
                height={720} // This is the aspect ratio height
                className="w-full rounded-md"
                style={{ objectPosition: "center 70%" }}
              />
            </div>
            {/* 4 other images */}
            <ul className="flex flex-row justify-between h-[100px] mt-5 md:mt-0 md:h-full md:grid md:grid-cols-2 gap-2 overflow-hidden">
              <li
                className="overflow-hidden"
                onClick={() => openLightboxOnSlide(2)}
              >
                <Image
                  src="https://d252kj1i9nz0td.cloudfront.net/rental/rental_1.jpg"
                  alt="Photo of CDMX Rental Bike"
                  className="w-full h-full object-cover rounded-md cursor-pointer duration-300 transform hover:scale-105"
                  height={200}
                  width={540}
                />
              </li>
              <li
                className="overflow-hidden"
                onClick={() => openLightboxOnSlide(3)}
              >
                <Image
                  src="https://d252kj1i9nz0td.cloudfront.net/rental/rental_2.jpg"
                  alt="Photo of CDMX Rental Bike"
                  className="w-full h-full object-cover rounded-md cursor-pointer duration-300 transform hover:scale-105"
                  height={200}
                  width={540}
                />
              </li>
              <li
                className="overflow-hidden"
                onClick={() => openLightboxOnSlide(4)}
              >
                <Image
                  src="https://d252kj1i9nz0td.cloudfront.net/rental/rental_3.jpg"
                  alt="Photo of CDMX Rental Bike"
                  className="w-full h-full object-cover rounded-md cursor-pointer duration-300 transform hover:scale-105"
                  height={200}
                  width={540}
                />
              </li>
              <li
                className="overflow-hidden"
                onClick={() => openLightboxOnSlide(1)}
              >
                <Image
                  src="https://d252kj1i9nz0td.cloudfront.net/bike.jpeg"
                  alt="Photo of CDMX Rental Bike"
                  className="w-full h-full object-cover rounded-md cursor-pointer duration-300 transform hover:scale-105"
                  height={200}
                  width={540}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Tour Content */}
        <div className="md:grid grid-cols-3 pt-10 gap-5">
          {/* Col 1 */}
          <div className="col-span-2 md:pr-10">
            <TourSection
              title={intl.formatMessage({ id: "rental.description.title" })}
            >
              <p>{intl.formatMessage({ id: "rental.description" })}</p>
            </TourSection>

            {/* Whats Included & Group Capacity */}
            <div className="flex flex-row gap-1 md:gap-0">
              <TourSection
                title={intl.formatMessage({ id: "rental.requirements.title" })}
                hideDivider
                className="max-w-[180px] md:max-w-[450px]"
              >
                <ul>
                  <li className="list-disc ml-3">
                    {intl.formatMessage({
                      id: "rental.requirement_1",
                    })}
                  </li>
                  <li className="list-disc ml-3">
                    {intl.formatMessage({
                      id: "rental.requirement_1",
                    })}
                  </li>
                </ul>
              </TourSection>
              <Divider orientation="vertical" />
              <TourSection
                title={intl.formatMessage({ id: "rental.cost.title" })}
                hideDivider
                // className="hidden md:block"
              >
                <ul>
                  <li>
                    2 Hrs : <span className="font-bold">$150 MXN</span>
                  </li>
                  <li>
                    6 Hrs : <span className="font-bold">$300 MXN</span>
                  </li>
                  <li>
                    24 Hrs : <span className="font-bold">$450 MXN</span>
                  </li>
                  <li>
                    {intl.formatMessage({ id: "rental.week" }) + " : "} <span className="font-bold">$1250 MXN</span>
                  </li>
                </ul>
              </TourSection>
            </div>
            <Divider />

            {/* Allowed Areas */}
            <TourSection
              title={intl.formatMessage({ id: "rental.allowedareas.title" })}
            >
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
            <TourSection
              title={intl.formatMessage({ id: "rental.deposit.title" })}
            >
              <p className="mb-2 italic">
                {intl.formatMessage({ id: "rental.deposit" })}
              </p>
            </TourSection>

            {/* Included */}
            <TourSection
              title={intl.formatMessage({ id: "rental.included.title" })}
              hideDivider
            >
              <ul>
                <li className="list-disc ml-3">
                  {intl.formatMessage({ id: "rental.included_1" })}
                </li>
                <li className="list-disc ml-3">
                  {intl.formatMessage({ id: "rental.included_2" })}
                </li>
                <li className="list-disc ml-3">
                  {intl.formatMessage({ id: "rental.included_3" })}
                </li>
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
