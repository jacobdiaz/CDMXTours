import Image from "next/image";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  gallery: Image[];
  setToggler: () => void;
  setImgIndex: (index: number) => void;
};

const ImageGallery = ({ gallery, setToggler, setImgIndex }: Props) => {
  if (gallery === undefined) return null;
  const handleToggle = (key: number) => {
    setToggler();
    setImgIndex(key);

    console.log("setting idx", key);
  };
  return (
    <div className='md:grid grid-cols-2 gap-2 h-96 md:h-[30rem] md:overflow-hidden md:rounded cursor-pointer'>
      {/* TODo Should I use figure or picture? */}
      <figure className=' md:w-full h-full '>
        <img
          className='object-cover w-full h-full rounded md:rounded-none'
          src={gallery[0].src}
          alt={gallery[0].alt}
          onClick={() => handleToggle(0)}
        />
      </figure>

      <div className='hidden md:grid grid-cols-2 gap-2 overflow-hidden'>
        {gallery.map(
          (img, idx) =>
            idx > 0 &&
            idx <= 4 && (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className='w-full h-full object-cover min-h-0'
                onClick={() => handleToggle(idx)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
