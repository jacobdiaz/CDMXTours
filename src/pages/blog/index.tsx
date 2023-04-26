import HeroSmall from "@/components/layout/HeroSmall";
import PageHeader from "@/components/layout/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import TourSection from "@/components/sections/ToursSection";
import { FormattedMessage, useIntl } from "react-intl";

const BlogPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "blog.meta.title" });
  const description = intl.formatMessage({ id: "blog.meta.description" });
  return (
    <>
      <PageHeader
        page_img='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1.jpg'
        keywords='Blog, Bike Tours CDMX, Mexico City Bike Tours, CDMX Bike Tours Blog'
      >
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
      </PageHeader>

      <HeroSmall
        title={intl.formatMessage({ id: "blog.hero.title" })}
        image='https://d252kj1i9nz0td.cloudfront.net/pages/Blog/blog_hero.jpg'
        ariaLabel='Blog'
        backgroundPosition='center 60%'
      />
      <div className='page-container mt-10 flex flex-col justify-center '>
        <SectionTitle margin='m-0' className='w-full text-center'>
          <FormattedMessage id='blog.coming_soon.title' />
        </SectionTitle>
        <p className='pt-5 pb-10 text-lg'>
          <FormattedMessage id='blog.coming_soon.paragraph' />
        </p>
        <TourSection hideHeader />
      </div>
    </>
  );
};

export default BlogPage;
