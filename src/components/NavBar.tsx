import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LanguageSelect from "./LanguageSelect";
import PageLinks from "@/utils/pagelinks";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Set the locale when select changes
  const handleLanguageChange = (locale: string) =>
    router.push(router.pathname, router.asPath, { locale: locale });

  return (
    <nav className='navbar bg-primary font-fjalla text-white text-m-p uppercase fixed z-10'>
      <div className='navbar-start'>
        {/* Mobile Links */}
        <div className='dropdown md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className='btn btn-ghost text-white'>✕</div>
          ) : (
            <label tabIndex={0} className='btn btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
          )}

          {/* Dropdown Menu */}
          {isOpen && (
            <div className='mt-0 w-5/6 fixed bg-primary h-5/6 left-0 px-5 flex flex-col justify-between'>
              <ul tabIndex={0}>
                <li className='py-5'>
                  <Link href='/'>Home</Link>
                </li>
                {PageLinks.map(({ message, href }, idx) => {
                  return (
                    <li key={idx} className='py-5'>
                      <Link href={href}>{message}</Link>
                    </li>
                  );
                })}
              </ul>
              <p className='py-5 text-sm opacity-50'>
                Language{" "}
                <button
                  className='px-3'
                  onClick={() => handleLanguageChange("en")}
                >
                  EN{" "}
                </button>{" "}
                <button onClick={() => handleLanguageChange("es")}> ES</button>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='navbar-center w-3/5 flex justify-center md:justify-between max-h-20'>
        {/* Desktop Links */}
        {PageLinks.map(({ message, href }, idx) => (
          <Link
            key={idx}
            href={href}
            className='hidden md:block hover:underline'
          >
            {idx === 3 ? (
              <img src='/nav_logo.webp' alt='Tours En Bici Logo' width={80} />
            ) : (
              message
            )}
          </Link>
        ))}
      </div>
      {/* Language Select */}
      <div className='navbar-end z-10'>
        <LanguageSelect
          onChange={(e: any) => handleLanguageChange(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default NavBar;
