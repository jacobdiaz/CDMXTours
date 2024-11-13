import { Tours } from "../../../utils/toursdata";
import { useRouter } from "next/router";
import Map from "@/components/layout/Map";
import CTALink from "@/components/actions/CTALink";
import ImageGallery from "@/components/tours/ImageGallery";
import Divider from "@/components/layout/Divider";
import TourSection from "@/components/tours/TourSection";
import Link from "next/link";
import ReserveBar from "@/components/tours/ReserveBar";
import DatePicker from "@/components/tours/DatePicker";
import PageHeader from "@/components/layout/PageHeader";
import Share from "@/components/actions/Share";
import { FormattedMessage, useIntl } from "react-intl";
import SectionText from "@/components/tours/SectionText";
import SwipableImageGallery from "@/components/layout/SwipableImageGallery";

const TourPage = () => {
  const router = useRouter();
  const Intl = useIntl();
  const { id } = router.query;
  const tour = Tours.find((t) => t.id === (id as string));
  if (tour === undefined) return null;
  const title = Intl.formatMessage({ id: tour.tourName });
  const description = Intl.formatMessage({ id: tour.description });

  return (
    <main>
      {/* TODO Add Keywords to Data to pass to pageheader */}
      <PageHeader
        url_path={`tours/${tour.id}`}
        page_img={tour.imgSrc}
        socialTitle={title}
        socialDescription={description}
        type="article"
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </PageHeader>
      <div className="page-container">
        <div className="w-full mt-16 md:mt-24 flex flex-col md:flex-row font-spartan font-bold md:items-center justify-between">
          <div className="flex flex-col w-full">
            <button
              onClick={() => router.back()}
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
              {Intl.formatMessage({
                id: "tours.view_all_tours",
                defaultMessage: "View All Tours",
              })}
            </button>
            <div className="w-full flex justify-center md:justify-between">
              <div>
                <h1 className="font-spartan text-4xl md:text-4xl uppercase md:text-start text-center">
                  <FormattedMessage id={tour?.tourName} />
                </h1>
              </div>
              <p className="hidden md:block md:text-2xl">
                ${tour?.price.toString()}MXN / Person
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center">
          <Share tour={tour} />
        </div>

        {/* If mobile display swipable gallery */}
        <div className="md:hidden block">
          <SwipableImageGallery images={tour.gallery.map((img) => img.src)} />
        </div>

        <div className="hidden md:block">
          <ImageGallery tour={tour} />
        </div>

        {/* Images */}
        {/* Tour Content */}
        <div className="md:grid grid-cols-3 pt-10 gap-5">
          {/* Col 1 */}
          <div className="col-span-2 md:pr-10">
            <TourSection
              title={Intl.formatMessage({ id: "tours.section.description" })}
            >
              {/* Description */}
              <SectionText>
                <FormattedMessage
                  id={tour?.description}
                  values={{
                    p: (...chunks) => <p>{chunks}</p>,
                    br: <br />,
                  }}
                />
              </SectionText>
            </TourSection>

            {/* Places we will visit */}
            {tour.placesToVisit && (
              <>
                <TourSection
                  title={Intl.formatMessage({ id: "tours.section.places" })}
                >
                  <ul>
                    {tour &&
                      tour.placesToVisit &&
                      tour.placesToVisit.map((p, idx) => (
                        <li key={idx} className="list-disc list-inside">
                          {p}
                        </li>
                      ))}
                  </ul>
                </TourSection>
              </>
            )}
            {/* Whats Included & Group Capacity */}
            <div className="flex flex-row gap-1 justify-between md:gap-0">
              <TourSection
                title={Intl.formatMessage({ id: "tours.section.included" })}
                className="w-full text-center"
                hideDivider
              >
                {tour.included.map((item, idx) => (
                  <p key={idx}>
                    <FormattedMessage id={`tours.included.${item}`} />
                    {tour.included.length - 1 > idx && ", "}
                  </p>
                ))}
              </TourSection>
              <Divider orientation="vertical" />
              <TourSection
                title={Intl.formatMessage({ id: "tours.section.capacity" })}
                className="w-full text-center"
                hideDivider
              >
                <p className="text-center">
                  {tour.cap} <FormattedMessage id="datepicker.guest" />
                </p>
              </TourSection>
            </div>
            <Divider />

            {/* Duration &  */}
            <div className="flex flex-row justify-between gap-1 md:gap-0">
              <TourSection
                title={Intl.formatMessage({ id: "tours.section.duration" })}
                className="w-full text-center"
                hideDivider
              >
                {<p>{tour.duration}</p>}
              </TourSection>
              <Divider orientation="vertical" />
              <TourSection
                title={Intl.formatMessage({ id: "tours.section.tourtimes" })}
                className="w-full text-center"
                hideDivider
              >
                <p>
                  {tour.availability.time &&
                    tour.availability.time.map((time, idx) => (
                      <span key={idx}>
                        {time}
                        {tour.availability.time &&
                          idx < tour.availability.time.length - 1 &&
                          ", "}
                      </span>
                    ))}
                </p>
              </TourSection>
            </div>
            <Divider />

            {/* Where to meet */}
            <TourSection
              title={Intl.formatMessage({ id: "tours.section.meet" })}
            >
              <SectionText className="mt-5">
                <FormattedMessage
                  id="tours.meet.desc"
                  values={{
                    location: (
                      <span>
                        <Link
                          href={tour.googleMapsLink}
                          className="underline"
                          target="_blank"
                          rel="nofollow"
                        >
                          {tour.meetingAddr}
                        </Link>
                      </span>
                    ),
                  }}
                />
              </SectionText>

              <Link
                href={tour.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                itemProp="url"
                className="btn rounded-md bg-primary text-white py-2 rounded-none px-5 font-normal my-5 text-lg w-full md:w-fit"
              >
                <span itemProp="Tours en Bici - Architectural Bike Tours CDMX">
                  <FormattedMessage id="tours.meet.get_directions" />
                </span>
              </Link>

              <Map
                address={tour.meetingAddr}
                googleMapsLink={tour.googleMapsLink}
                coords={tour.coords}
              />
            </TourSection>

            {/* Have a Question*/}
            <TourSection
              title={Intl.formatMessage({
                id: "tours.section.have_a_question",
              })}
              hideDivider
            >
              <SectionText>
                <FormattedMessage id="tours.have_a_question.desc" />{" "}
                <Link
                  href="tel:+52-1-55-8333-3677"
                  rel="nofollow"
                  className="underline font-bold"
                >
                  +52 1 55 8333 3677
                </Link>
                .
              </SectionText>
              <CTALink
                variant="dark"
                href="/contact"
                className="w-full md:w-fit"
              >
                <FormattedMessage id="tours.contactus" />
              </CTALink>
            </TourSection>
          </div>

          {/* Col 2 */}
          <div className="hidden md:block ">
            <DatePicker
              availability={tour.availability}
              price={tour.price}
              tourName={tour.tourName}
              cap={parseInt(tour.cap)}
              minGuests={parseInt(tour.minGuests)}
            />
          </div>
        </div>
      </div>
      {/* Mobile Reserve Bar */}
      <ReserveBar tourData={tour} isRentalBike={false} />
    </main>
  );
};

export default TourPage;
