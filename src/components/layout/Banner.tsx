type BannerProps = {
  background: string;
  children?: React.ReactNode;
};

const Banner = ({ background, children }: BannerProps) => (
  <div
    className='h-banner flex flex-col justify-center items-center text-white'
    style={{
      backgroundImage: `url('${background}')`,
      backgroundPosition: "center center",
    }}
  >
    {/* TODO Add image overlay */}
    <h4 className='text-5xl font-fjalla'>{children}</h4>
  </div>
);

export default Banner;
