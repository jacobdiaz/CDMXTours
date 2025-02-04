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
        image="https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/WalkingTours/walking_banner-dZTE8N8ZQapfx7EXddln0nM7JzCKbz.jpg"
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
