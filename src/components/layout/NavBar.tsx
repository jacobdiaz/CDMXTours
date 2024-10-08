import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LanguageSelect from "../actions/LanguageSelect";
import PageLinks from "@/utils/pagelinks";
import Image from "next/image";
// Todo see what main device users use, and lazy load the component that is not used as much

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const Logo = () => (
    <Image
      src='/logo.png'
      alt='CDMX Bike Tours Logo'
      width={80}
      height={80}
      className='shadow-xl rounded-full z-20'
    />
  );
  // Set the locale when select changes
  const handleLanguageChange = (locale: string) =>
    router.push(router.pathname, router.asPath, { locale: locale });

  return (
    <nav className='navbar bg-primary font-spartan font-bold text-white text-m-p uppercase fixed z-50'>
      <div className='navbar-start'>
        {/* Mobile Links */}
        <div className='dropdown md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className='btn btn-ghost text-white text-2xl'>✕</div>
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
            <div className='mt-0 w-full fixed bg-primary h-4/7 left-0 px-5 flex flex-col justify-between'>
              <ul
                tabIndex={0}
                className='mt-12 w-full flex flex-col items-center'
              >
                <li className='py-3'>
                  <Link href='/' className='px-20 py-5'>
                    Home
                  </Link>
                </li>
                {PageLinks.map(({ message, href }, idx) => {
                  return (
                    idx !== 3 && ( // Skip the home link
                      <li key={idx} className='py-3'>
                        <Link href={href} className='py-5
                        flex-nowrap
                        '>
                          {message}
                        </Link>
                      </li>
                    )
                  );
                })}
              </ul>
              <div className='py-8 text-sm opacity-50 flex flex-row justify-center w-full'>
                <p>Language</p>
                <button
                  className='px-3'
                  onClick={() => handleLanguageChange("en")}
                >
                  English{" "}
                </button>{" "}
                <button onClick={() => handleLanguageChange("es")}>
                  {" "}
                  Español
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='navbar-center md:hidden'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          <Logo />
        </Link>
      </div>
      <div className='hidden md:navbar-center w-3/5 md:flex justify-center md:justify-between max-h-20'>
        {/* Desktop Links */}
        {PageLinks.map(({ message, href }, idx) => (
          <Link
            key={idx}
            href={href}
            className='hidden md:block hover:underline'
          >
            {idx === 3 ? <Logo /> : message}
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
