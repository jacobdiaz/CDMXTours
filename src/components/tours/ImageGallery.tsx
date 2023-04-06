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
  };
  return (
    <div className='container md:grid grid-cols-3 gap-2 mx-auto'>
      {/* TODo Should I use figure or picture? */}
      <div className='col-span-2 max-h-[35rem]'>
        <img
          className='w-full h-full object-cover'
          src={gallery[0].src}
          alt={gallery[0].alt}
          onClick={() => handleToggle(0)}
        />
      </div>

      <div className='hidden md:grid grid-cols-2 gap-2'>
        {gallery.map(
          (img, idx) =>
            idx > 0 &&
            idx <= 4 && (
              <div className=' '>
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className='w-full h-full object-cover'
                  onClick={() => handleToggle(idx)}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
