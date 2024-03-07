import HeroSmall from "@/components/layout/HeroSmall";
import PageHeader from "@/components/layout/PageHeader";
import TourSection from "@/components/sections/ToursSection";
import { useIntl } from "react-intl";

// Todo translate!
function BookATourPage() {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: "tours.book.title",
    defaultMessage: "Book a Bike Tour",
  });
  return (
    <>
      <PageHeader type="article" url_path="book-a-tour">
        <title>{title}</title>
        <meta property="og:title" content="Book A Tour" />
      </PageHeader>
      <HeroSmall
        title={title}
        image="https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_1.jpg	"
        ariaLabel="Book a Bike Tour"
        backgroundPosition="center top 60%"
      />
      <div className="page-container">
        <TourSection />
      </div>
    </>
  );
}

export default BookATourPage;
