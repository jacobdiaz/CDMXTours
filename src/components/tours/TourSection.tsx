import Divider from "../layout/Divider";

type SectionProps = {
  title: string;
  hideDivider?: boolean;
  children?: React.ReactNode;
};

const TourSection = ({
  title,
  children,
  hideDivider = false,
}: SectionProps) => (
  <div className='mb-5'>
    <h4 className='mb-2 text-xl font-bold'>{title}</h4>
    {children}

    {!hideDivider && <Divider />}
  </div>
);

export default TourSection;
