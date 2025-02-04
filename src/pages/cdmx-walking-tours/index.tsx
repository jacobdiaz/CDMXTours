import HeroSmall from "@/components/layout/HeroSmall";
import PageHeader from "@/components/layout/PageHeader";
import TourSection from "@/components/sections/ToursSection";
import { useIntl } from "react-intl";

function WalkingToursPage() {
  const intl = useIntl();
  const metaTitle = intl.formatMessage({
    id: "tours.bike.meta.title",
    defaultMessage: "CDMX Walking Tours",
  });

  //  TODO translate
  const title = "CDMX Walking Tours";
  return (
    <>
      <PageHeader type="article" url_path="cdmx-walking-tours">
        <title>{metaTitle}</title>
        <meta property="og:title" content="Book a CDMX Walking tour " />
      </PageHeader>
      <HeroSmall
        title={title}
        image="https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/WalkingTours/walking_banner-dZTE8N8ZQapfx7EXddln0nM7JzCKbz.jpg"
        ariaLabel="Mexico City Walking Tours"
        backgroundPosition="center top 60%"
      />
      <div className="page-container">
        <TourSection tourType="Walking" />
      </div>
    </>
  );
}

export default WalkingToursPage;
