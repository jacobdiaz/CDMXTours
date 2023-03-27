import { FormattedMessage } from "react-intl";
type Link = {
  message: string | JSX.Element;
  href: string;
};

const PageLinks: Link[] = [
  {
    message: <FormattedMessage id='nav.about' />,
    href: "/about-us",
  },
  {
    message: <FormattedMessage id='nav.contact' />,
    href: "/contact",
  },
  {
    message: "Blog",
    href: "/blog",
  },
  {
    message: "Home",
    href: "/",
  },
  {
    message: "FAQ",
    href: "/faq",
  },
  {
    message: <FormattedMessage id='nav.gallery' />,
    href: "/gallery",
  },
  {
    message: <FormattedMessage id='nav.book' />,
    href: "/book-a-tour",
  },
];

export default PageLinks;
