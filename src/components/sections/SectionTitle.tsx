type Props = {
  children?: React.ReactNode;
  color?: "text-primary" | "text-white";
  font?: string;
  margin?: string;
  className?: string;
};

const SectionTitle = ({
  children,
  color = "text-primary",
  font = "font-spartan font-bold",
  margin = "m-5",
  className,
}: Props) => (
  <h2 className={`text-2xl md:text-3xl uppercase ${margin} ${font} ${color} ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
