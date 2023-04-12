import HeroSmall from "@/components/layout/HeroSmall";
import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

const ContactUsPage = () => (
  <main>
    <PageHeader
      page_img='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1.jpg'
      keywords='Contact Us, Bike Tours CDMX, Mexico City Bike Tours, Contact CDMX Bike Tours'
    ></PageHeader>
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
  </main>
);

export default ContactUsPage;
