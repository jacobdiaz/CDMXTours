import HeroSmall from "@/components/layout/HeroSmall";
import ContactSection from "@/components/sections/ContactSection";

function ContactUsPage() {
  return (
    <>
      <HeroSmall
        title='Contact'
        image='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1.jpg'
        ariaLabel='Contact Us'
      />
      <div className='px-8 pb-8 md:pb-32 md:px-32'>
        <ContactSection />
      </div>
    </>
  );
}

export default ContactUsPage;
