import HeroSmall from "@/components/layout/HeroSmall";
import ContactSection from "@/components/sections/ContactSection";

function ContactUsPage() {
  return (
    <>
      <HeroSmall
        title='Contact'
        image='https://cdmxtours.s3.amazonaws.com/Images/home/dsc00024.webp'
        ariaLabel='Contact Us Section'
      />
      <div className='px-8 pb-8 md:pb-32 md:px-32'>
        <ContactSection />
      </div>
    </>
  );
}

export default ContactUsPage;
