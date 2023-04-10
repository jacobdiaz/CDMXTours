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
      <div className='px-12 md:pb-32 md:px-72'>
        <div className='flex flex-col justify-center mt-10 mb-5'>
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
