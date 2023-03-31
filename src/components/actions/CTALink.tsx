import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  grow?: boolean;
  bottom?: boolean;
};

const CTALink = (props: Props) => {
  const { children, variant = "light", href, grow, bottom } = props;
  const btnClass = `btn py-2 w-fit rounded-none px-5 font-normal my-5 text-lg ${
    variant === "dark"
      ? "bg-primary text-white"
      : "bg-white text-black hover:bg-gray-100"
  } ${grow && "w-full"} ${bottom && ""}`;

  return (
    <Link className={btnClass} href={href}>
      {children}
    </Link>
  );
};

export default CTALink;
