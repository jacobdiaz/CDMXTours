import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  grow?: boolean;
  bottom?: boolean;
  className?: string;
};

const CTALink = (props: Props) => {
  const { children, variant = "light", href, grow, className } = props;
  const btnClass = `rounded-md btn py-2 w-fit rounded-none px-5 font-normal my-5 text-lg ${
    variant === "dark"
      ? "bg-primary text-white"
      : "bg-white text-black hover:bg-gray-100"
  } ${grow && "w-full md:w-fit"} ${className}`;

  return (
    <Link className={btnClass} href={href} rel='nofollow'>
      {children}
    </Link>
  );
};

export default CTALink;
