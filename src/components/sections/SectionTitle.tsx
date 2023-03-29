type Props = {
  children?: React.ReactNode;
  color?: "text-primary" | "text-white";
  font?: "font-fjalla" | "font-ssp";
};

const SectionTitle = ({
  children,
  color = "text-primary",
  font = "font-fjalla",
}: Props) => (
  <h3 className={`text-3xl uppercase m-5 ${font} ${color}`}>{children}</h3>
);

export default SectionTitle;
