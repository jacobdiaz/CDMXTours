import Link from "next/link";
import { FormattedMessage } from "react-intl";
import CTALink from "../actions/CTALink";
import ContactForm from "../contact/ContactForm";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 pt-8 md:pt-20'>
        {/* Col 1 */}
        <div className='w-full flex flex-col pr-0 md:pr-20'>
          <SectionTitle margin='m-0'>Contact Information</SectionTitle>
          <p className='py-2'>
            Stay in contact with us for any questions or bike tour bookings.
          </p>
          <p className='pt-2'>
            <strong className='underline'>WhatsApp: </strong>
            <a href='+52 1 55 8333 3677' type='phone'>
              +52 1 55 8333 3677
            </a>
          </p>
          <p className='pt-2 pb-5'>
            <strong className='underline'>Email: </strong>
            <a href='toursenbici@gmail.com' type='email'>
              toursenbici@gmail.com
            </a>{" "}
          </p>

          <ContactForm />
        </div>
        {/* Col 2 */}
        <div className='hidden md:block w-full pl-5'>
          <img
            className='w-full h-full object-cover'
            src='https://cdmxtours.s3.amazonaws.com/Images/home/20211116_233905-0001.webp'
            alt='Group of Bikers on a Bike Tour in Mexico City'
          />
        </div>
      </div>
    </>
  );
};
export default ContactSection;
