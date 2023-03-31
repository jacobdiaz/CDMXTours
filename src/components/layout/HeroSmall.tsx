import ImageOverlay from "./ImageOverlay";

type HeroSmall = {
  children?: React.ReactNode;
  image: string;
  title: string;
  ariaLabel: string;
};

const HeroSmall = ({ children, image, title, ariaLabel }: HeroSmall) => {
  return (
    <div
      aria-label={ariaLabel}
      className='bg-cover bg-bottom flex justify-center items-center pt-20 h-72 md:h-heroSmall text-white relative'
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center bottom 30%",
      }}
    >
      <h1 className='font-fjalla text-3xl md:text-4xl z-20 uppercase'>
        {title}
      </h1>
      {children}
      <ImageOverlay />
    </div>
  );
};

export default HeroSmall;
