import HeroSmall from "@/components/layout/HeroSmall";
import TourSection from "@/components/sections/ToursSection";

// Todo translate!
function BookATourPage() {
  return (
    <>
      <HeroSmall
        title='Book a Tour'
        image='https://cdmxtours.s3.amazonaws.com/Images/home/dsc00024.webp'
      />
      <div className='px-10 pb-10 md:pb-32 md:px-32'>
        <TourSection />
      </div>
    </>
  );
}

export default BookATourPage;
