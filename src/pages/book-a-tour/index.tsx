import HeroSmall from "@/components/layout/HeroSmall";
import PageHeader from "@/components/layout/PageHeader";
import TourSection from "@/components/sections/ToursSection";

// Todo translate!
function BookATourPage() {
  return (
    <>
      <PageHeader type='article'>
        <title>Book A Tour</title>
        <meta property='og:title' content='Book A Tour' />
      </PageHeader>
      <HeroSmall
        title='Book a Tour'
        image='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_1.jpg	'
        ariaLabel='Book a Bike Tour'
        backgroundPosition='center top 60%'
      />
      <div className='page-container'>
        <TourSection />
      </div>
    </>
  );
}

export default BookATourPage;
