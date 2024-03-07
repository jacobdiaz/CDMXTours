import React from "react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import Link from "next/link";

const WhatsAppBtn = () => {
  return (
    <Link
      href="https://wa.me/c/5215583333677"
      about="whatsapp"
      className="mb-20 fixed bottom-3 right-3 z-10 md:hidden flex flex-col items-center p-5 bg-black shadow-lg rounded-full shadow-[#0000005d]"
    >
      <WhatsAppIcon />
    </Link>
  );
};

export default WhatsAppBtn;
