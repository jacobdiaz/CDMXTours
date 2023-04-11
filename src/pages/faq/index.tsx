import CTALink from "@/components/actions/CTALink";
import ContactForm from "@/components/contact/ContactForm";
import FaqItem from "@/components/layout/FaqItem";
import HeroSmall from "@/components/layout/HeroSmall";
import SectionTitle from "@/components/sections/SectionTitle";
import Link from "next/link";

const FAQPage = () => (
  <>
    <HeroSmall
      title='Frequently Asked Questions'
      image='https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero.jpg'
      ariaLabel='Book a Bike Tour'
      backgroundPosition='center top 60%'
    />
    <div className='page-container'>
      <div className='flex flex-col justify-center my-10'>
        <SectionTitle margin='m-0'>FAQ</SectionTitle>
        <div className='md:grid md:grid-cols-2 md:gap-4 mb-10'>
          {/* Col 1 */}
          <div>
            <FaqItem question='What safety equipment is provided?'>
              <p>
                We believe the best way to see Mexico City is by bicycle! Our
                bike tours will provide each guest with a reflective traffic
                vest that will make you easily visible to on-comming traffic,
                along with a fitted bike helmet. Our tour guides are well
                trained in safety and will insure that you have a safe and fun
                experience!
              </p>
            </FaqItem>
            <FaqItem question='Can I reserve for a private group?'>
              <p>
                Yes! Please contact us through whatsApp at{" "}
                <span>
                  <Link
                    href='tel:+52-1-55-8333-3677'
                    rel='nofollow'
                    className='underline'
                  >
                    +52 1 55 8333 3677
                  </Link>
                </span>{" "}
                to setup a private bike tour.
              </p>
            </FaqItem>
            <FaqItem question='Where will we meet for our tour?'>
              <p>
                We will meet at{" "}
                <Link
                  href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7'
                  className='underline'
                  target='_blank'
                  rel='nofollow'
                >
                  Calle Versalles 88, 06600 Mexico City, Mexico
                </Link>{" "}
                where you will meet your guide and be fitted with a bike and
                safety equipment
              </p>
              <CTALink
                href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7'
                variant='dark'
              >
                Get Directions
              </CTALink>
            </FaqItem>
          </div>

          {/* Col 2 */}
          <div>
            <FaqItem question='How can I reschedule a tour?'>
              <p>
                We understand that sometimes unexpected things may come up. If
                you need to reschedule a tour, please contact us on WhatsApp at{" "}
                <span>
                  <Link
                    href='tel:+52-1-55-8333-3677'
                    rel='nofollow'
                    className='underline'
                  >
                    +52 1 55 8333 3677
                  </Link>
                </span>
              </p>
            </FaqItem>

            <FaqItem question='What size bikes are used for the tour?'>
              <p>
                Our fleet of bikes has an array of different sizes to fit
                anyone. A guides will fit pair you with a bike that best suites
                you.
              </p>
            </FaqItem>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm header='Still Have A Question?' />
      </div>
    </div>
  </>
);

export default FAQPage;
