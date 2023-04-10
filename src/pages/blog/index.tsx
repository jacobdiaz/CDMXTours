import HeroSmall from "@/components/layout/HeroSmall";
import SectionTitle from "@/components/sections/SectionTitle";
import TourSection from "@/components/sections/ToursSection";
import Link from "next/link";

const BlogPage = () => (
  <>
    <HeroSmall
      title='Blog'
      image='https://d252kj1i9nz0td.cloudfront.net/pages/Blog/blog_hero.jpg'
      ariaLabel='Blog'
      backgroundPosition='center 60%'
    />
    <div className='py-12 px-12 md:px-72 flex flex-col justify-center '>
      <SectionTitle margin='m-0' className='w-full text-center'>
        Blog Coming Soon!
      </SectionTitle>
      <p className='pt-5 pb-10 text-lg'>
        We want to share our experiences and recommendations with you to make
        your experience in Mexico City the best! We are working hard to put to
        gether our favorite local spots and tips for your next visit. In the
        mean time take a look at the bike tours that we offer!
      </p>
      <TourSection hideHeader />
    </div>
  </>
);

export default BlogPage;
