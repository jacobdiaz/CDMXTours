import HeroSmall from "@/components/layout/HeroSmall";
import ContactSection from "@/components/sections/ContactSection";

const ContactUsPage = () => (
  <>
    <HeroSmall
      title='Contact'
      image='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1.jpg'
      ariaLabel='Contact Us'
    />
    <div className='page-container'>
      <div className='flex flex-col justify-center mb-10'>
        <ContactSection />
      </div>
    </div>
  </>
);

export default ContactUsPage;
