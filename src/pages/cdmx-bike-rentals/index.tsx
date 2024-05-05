import Divider from "@/components/layout/Divider";
import PageHeader from "@/components/layout/PageHeader";

import DatePicker from "@/components/tours/DatePicker";
import ReserveBar from "@/components/tours/ReserveBar";
import TourSection from "@/components/tours/TourSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

const BikeRentalsPage = (props: Props) => {
  const title = "Bike Rentals in Mexico City";
  const intl = useIntl();
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
                    1 Hr : <span className="font-bold">$80 MXN</span>
                  </li>
                  <li>
                    2 Hrs : <span className="font-bold">$150 MXN</span>
                  </li>
                  <li>
                    5 Hrs : <span className="font-bold">$250 MXN</span>
                  </li>
                  <li>
                    24 Hrs : <span className="font-bold">$300 MXN</span>
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
