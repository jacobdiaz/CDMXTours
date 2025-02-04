import HeroSmall from '@/components/layout/HeroSmall';
import PageHeader from '@/components/layout/PageHeader';
import ContactSection from '@/components/sections/ContactSection';
import { useIntl } from 'react-intl';

const ContactUsPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'contact.meta.title' });
  const description = intl.formatMessage({ id: 'contact.meta.description' });
  return (
    <main>
      <PageHeader
        page_img="https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Contact/contact_contact-wbAFsq3fz2G8IywqiQPeovet0F1Eed.jpg"
        keywords="Contact Us, Bike Tours CDMX, Mexico City Bike Tours, Contact CDMX Bike Tours"
        url_path="contact"
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </PageHeader>
      <HeroSmall
        title={intl.formatMessage({ id: 'contact.hero.title' })}
        image="https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Contact/contact_contact-wbAFsq3fz2G8IywqiQPeovet0F1Eed.jpg"
        ariaLabel="Contact Us"
      />
      <div className="page-container">
        <div className="flex flex-col justify-center mb-10">
          <ContactSection />
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;
