import { FormattedMessage } from "react-intl";
import SectionTitle from "./SectionTitle";
import TourTypeCard from "../tours/TourTypeCard";

type Props = {
  hideHeader?: boolean;
};

const TourTypeSection = ({ hideHeader }: Props) => {
  const tourTypes = ["Weekend", "Weekday", "Reservation"];
  const cardImages = [
    "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_1.jpg",
    "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
    "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Markets/markets1.jpg",
  ];
  return (
    <section>
      {!hideHeader && (
        <div className="flex flex-col justify-center md:items-center mt-10 mb-5">
          <SectionTitle margin="m-0">
            <FormattedMessage id="home.tours.title" />
          </SectionTitle>
        </div>
      )}
      <div className="flex flex-col justify-center items-center w-full">
        {!hideHeader && (
          <p className="text-lg mb-10">
            <FormattedMessage id="home.tours.description" />
          </p>
        )}
        <ul className="flex flex-row justify-center md:justify-between w-full">
          {tourTypes.map((t, idx) => (
            <TourTypeCard tourType={t} imageSrc={cardImages[idx]} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TourTypeSection;
