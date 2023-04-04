type DividerProps = {
  orientation?: "horizontal" | "vertical";
};
const Divider = ({ orientation = "horizontal" }: DividerProps) => (
  <div
    className={`divider ${
      orientation === "horizontal" ? "" : "lg:divider-horizontal"
    }`}
  ></div>
);

export default Divider;
