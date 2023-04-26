import CTALink from "@/components/actions/CTALink";
import HeroSmall from "@/components/layout/HeroSmall";
import SectionTitle from "@/components/sections/SectionTitle";
import { Gallery } from "@/utils/galleryData";
import Image from "next/image";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FormattedMessage, useIntl } from "react-intl";

const GalleryPage = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const sources = Gallery.map((img) => img.src);
  const intl = useIntl();
  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
        loadOnlyCurrentSource={true}
      />
      <HeroSmall
        title={intl.formatMessage({ id: "gallery.hero.title" })}
        image='https://d252kj1i9nz0td.cloudfront.net/pages/Gallery/hero.jpg'
        ariaLabel={intl.formatMessage({ id: "gallery.hero.title" })}
        backgroundPosition='center 20%'
      />

      <main className='page-container'>
        <div className='flex flex-col justify-center my-10'>
          <div className='grid md:grid-cols-3'>
            <div className='md:col-span-2'>
              <SectionTitle margin='m-0'>
                <FormattedMessage id='gallery.hero.title' />
              </SectionTitle>
              <p className='my-5'>
                <FormattedMessage id='gallery.meta.description' />
              </p>
            </div>
            <div className='flex flex-col items-end justify-end'>
              <CTALink href='mailto:toursenbici@gmail.com' variant='dark' grow>
                <FormattedMessage id='gallery.send_us_photos.button' />
              </CTALink>
            </div>
          </div>
          <ul className='container grid md:grid-cols-3 gap-5 '>
            {Gallery.map((img, idx) => (
              <li
                key={img.src}
                className='h-[340px] relative overflow-hidden '
                onClick={() => openLightboxOnSlide(idx + 1)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={340}
                  height={340}
                  sizes='50vw'
                  loading='lazy'
                  className='absolute left-0 w-full h-full object-cover cursor-pointer duration-300 transform hover:scale-105'
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
