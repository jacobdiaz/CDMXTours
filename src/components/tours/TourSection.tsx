import Divider from "../layout/Divider";

type SectionProps = {
  title: string;
  hideDivider?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const TourSection = ({
  title,
  children,
  className,
  hideDivider = false,
}: SectionProps) => (
  <div className={`mb-5 ${className}`}>
    <h4 className="mb-2 text-2xl font-bold">{title}</h4>
    {children}

    {!hideDivider && <Divider />}
  </div>
);

export default TourSection;
