type Props = {
  children?: React.ReactNode;
  color?: "text-primary" | "text-white";
  font?: "font-fjalla" | "font-ssp";
  margin?: "m-5" | "m-0";
};

const SectionTitle = ({
  children,
  color = "text-primary",
  font = "font-fjalla",
  margin = "m-5",
}: Props) => (
  <h3 className={`text-3xl uppercase ${margin} ${font} ${color}`}>
    {children}
  </h3>
);

export default SectionTitle;
