import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLProps<HTMLParagraphElement>;

const SectionText = ({ children, className = "", ...otherProps }: Props) => (
  <p className={`text-[16px] ${className}`} {...otherProps}>
    {children}
  </p>
);

export default SectionText;
