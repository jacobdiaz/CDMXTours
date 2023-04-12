type Props = {
  children?: React.ReactNode;
  color?: "text-primary" | "text-white";
  font?: "font-fjalla" | "font-ssp";
  margin?: string;
  className?: string;
};

const SectionTitle = ({
  children,
  color = "text-primary",
  font = "font-fjalla",
  margin = "m-5",
  className,
}: Props) => (
  <h2 className={`text-3xl uppercase ${margin} ${font} ${color} ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
