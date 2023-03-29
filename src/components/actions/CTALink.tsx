import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
};

const CTALink = (props: Props) => {
  const { children, variant = "light", href, ...attribs } = props;
  const btnClass = `py-2 px-5  font-normal w-fit my-5 text-lg ${
    variant === "dark" ? "bg-primary text-white" : "bg-white text-primary"
  }`;

  return (
    <Link {...attribs} className={btnClass} href={href}>
      {children}
    </Link>
  );
};

export default CTALink;
