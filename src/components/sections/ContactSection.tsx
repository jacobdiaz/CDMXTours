import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import ContactForm from "../contact/ContactForm";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <div className='mt-10'>
      <div className='grid md:grid-cols-2'>
        {/* Col 1 */}
        <div className='w-full flex flex-col pr-0 md:pr-20'>
          <SectionTitle margin='m-0'>Contact Information</SectionTitle>
          <p className='pt-5'>
            Stay in contact with us for any questions or bike tour bookings.
          </p>
          <p className='pt-5'>
            <strong>WhatsApp: </strong>
            <Link
              href='tel:+52-1-55-8333-3677'
              rel='nofollow'
              className='underline'
            >
              +52 1 55 8333 3677
            </Link>
          </p>
          <p className='pt-2 pb-5'>
            <strong>Email: </strong>
            <a
              href='mailto:toursenbici@gmail.com'
              type='email'
              className='underline'
            >
              toursenbici@gmail.com
            </a>
          </p>

          <ContactForm />
        </div>
        {/* Col 2 */}
        <div className='hidden md:block w-full pl-5'>
          <Image
            className='w-full h-full object-cover'
            src='https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_contact.jpg'
            alt='Group of Bikers on a Bike Tour in Mexico City'
            height={900}
            width={720}
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
