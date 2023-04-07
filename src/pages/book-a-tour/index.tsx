import HeroSmall from "@/components/layout/HeroSmall";
import TourSection from "@/components/sections/ToursSection";

// Todo translate!
function BookATourPage() {
  return (
    <>
      <HeroSmall
        title='Book a Tour'
        image='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_1.jpg'
        ariaLabel='Book a Bike Tour'
        backgroundPosition='center top 60%'
      />
      <div className='px-12 md:pb-32 md:px-72'>
        <TourSection />
      </div>
    </>
  );
}

export default BookATourPage;
