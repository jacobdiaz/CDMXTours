import { FormattedMessage } from "react-intl";
type Link = {
  message: string | JSX.Element;
  href: string;
};

const PageLinks: Link[] = [
  {
    message: <FormattedMessage id="nav.about" />,
    href: "/cdmx-bike-rentals",
  },
  {
    message: <FormattedMessage id="nav.contact" />,
    href: "/contact",
  },
  {
    message: "FAQ",
    href: "/faq",
  },
  {
    message: "Home",
    href: "/",
  },
  {
    message: <FormattedMessage id="nav.gallery" />,
    href: "/gallery",
  },
  {
    message: <FormattedMessage id="nav.walking-tour" />,
    href: "/cdmx-walking-tours",
  },
  {
    message: <FormattedMessage id="nav.bike-tour" />,
    href: "/cdmx-bike-tours",
  },
];

export default PageLinks;
