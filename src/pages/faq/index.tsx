import CTALink from '@/components/actions/CTALink';
import ContactForm from '@/components/contact/ContactForm';
import FaqItem from '@/components/layout/FaqItem';
import HeroSmall from '@/components/layout/HeroSmall';
import PageHeader from '@/components/layout/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';

const FAQPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'faq.meta.title' });
  const description = intl.formatMessage({ id: 'faq.meta.description' });
  return (
    <>
      <PageHeader
        url_path="faq"
        keywords="FAQ, Bike Tours CDMX, Mexico City Bike Tours, Contact CDMX Bike Tours"
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </PageHeader>
      <HeroSmall
        title={intl.formatMessage({ id: 'faq.hero.title' })}
        image="https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Home/hero_home_desktop-5pAW69OtptXVorSKiAuPvFegYXBAAI.jpg"
        ariaLabel="Book a Bike Tour"
        backgroundPosition="center top 60%"
      />
      <div className="page-container">
        <div className="flex flex-col justify-center my-10">
          <SectionTitle margin="m-0">
            <FormattedMessage id="faq.title" />
          </SectionTitle>
          <div className="md:grid md:grid-cols-2 md:gap-4 mb-10">
            {/* Col 1 */}
            <div>
              <FaqItem
                question={intl.formatMessage({
                  id: 'faq.safety_equipment.title',
                })}
              >
                <p>
                  {intl.formatMessage({
                    id: 'faq.safety_equipment.description',
                  })}
                </p>
              </FaqItem>
              <FaqItem
                question={intl.formatMessage({
                  id: 'faq.private_group.title',
                })}
              >
                <p>
                  <FormattedMessage id="faq.private_group.description" />
                </p>
              </FaqItem>
              <FaqItem
                question={intl.formatMessage({
                  id: 'faq.where_to_meet.title',
                })}
              >
                <p>
                  <Link
                    href="https://maps.app.goo.gl/mzJeRCR36R2p3aGG9"
                    className="underline"
                    target="_blank"
                    rel="nofollow"
                  >
                    Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX
                  </Link>{' '}
                  {intl.formatMessage({
                    id: 'faq.where_to_meet.description',
                  })}
                </p>
                <CTALink
                  href="https://maps.app.goo.gl/mzJeRCR36R2p3aGG9"
                  variant="dark"
                >
                  <FormattedMessage id="faq.getDirections.button" />
                </CTALink>
              </FaqItem>
            </div>

            {/* Col 2 */}
            <div>
              <FaqItem
                question={intl.formatMessage({ id: 'faq.reschedule.title' })}
              >
                <p>
                  <FormattedMessage id="faq.reschedule.description" />
                </p>
              </FaqItem>

              <FaqItem
                question={intl.formatMessage({
                  id: 'faq.bikesize.title',
                })}
              >
                <p>
                  <FormattedMessage id="faq.bikesize.description" />
                </p>
              </FaqItem>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm
            header={intl.formatMessage({
              id: 'faq.still_have_a_question.title',
            })}
          />
        </div>
      </div>
    </>
  );
};

export default FAQPage;
