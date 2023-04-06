import Image from "next/image";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  gallery: Image[];
};

const ImageGallery = ({ gallery }: Props) => {
  if (gallery === undefined) return null;

  return (
    <div className='container md:grid grid-cols-3 gap-2 mx-auto'>
      {/* TODo Should I use figure or picture? */}
      <div className='col-span-2 max-h-[35rem]'>
        <img
          className='w-full h-full object-cover rounded -lg md:rounded-none'
          src={gallery[0].src}
          alt={gallery[0].alt}
          style={{ objectPosition: "center 70%" }}
        />
      </div>

      <div className='hidden md:grid grid-cols-2 gap-2'>
        {gallery.map(
          (img, idx) =>
            idx > 0 &&
            idx <= 4 && (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className='w-full h-full object-cover'
              />
            )
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
