import { Tour } from "@/utils/toursdata";
import Image from "next/image";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  tour: Tour;
};

const ImageGallery = ({ tour }: Props) => {
  if (tour?.gallery === undefined) return null;

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
  const sources = tour.gallery.map((img) => img.src);

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
        loadOnlyCurrentSource={true}
      />

      <div className='container md:grid grid-cols-3 gap-2 mx-auto'>
        <div className='col-span-2 max-h-[35rem]'>
          <Image
            className='w-full h-full object-cover rounded -lg md:rounded-none cursor-pointer'
            src={tour.gallery[0].src}
            alt={tour.gallery[0].alt}
            style={{ objectPosition: "center 70%" }}
            height={1080}
            width={720}
            loading='eager'
            onClick={() => openLightboxOnSlide(1)}
            priority
          />
        </div>

        <ul className='flex flex-row justify-between h-[100px] mt-5 md:mt-0 md:h-full md:grid md:grid-cols-2 gap-2 overflow-hidden'>
          {tour.gallery.map(
            (img, idx) =>
              idx > 0 &&
              idx <= 4 && (
                <li
                  onClick={() => openLightboxOnSlide(idx + 1)}
                  className='overflow-hidden'
                  key={idx}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className='w-full h-full object-cover cursor-pointer duration-300 transform hover:scale-105'
                    height={720}
                    width={540}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default ImageGallery;
