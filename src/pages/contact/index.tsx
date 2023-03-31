import HeroSmall from "@/components/layout/HeroSmall";
import ContactSection from "@/components/sections/ContactSection";

type Props = {};

function ContactUsPage({}: Props) {
  return (
    <>
      <HeroSmall
        title='Contact'
        image='https://cdmxtours.s3.amazonaws.com/Images/home/dsc00024.webp'
      />
      <div className='px-16 pb-16 md:pb-32 md:px-32'>
        <ContactSection />
      </div>
    </>
  );
}

export default ContactUsPage;
