import HeroSmall from "@/components/layout/HeroSmall";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <HeroSmall
        title='About Us'
        image='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_1.jpg'
        ariaLabel='Book a Bike Tour'
        backgroundPosition='center top 60%'
      />
      <div className='px-12 md:pb-32 md:px-72'> </div>
    </>
  );
};

export default AboutPage;
