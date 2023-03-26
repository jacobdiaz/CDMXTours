import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className='navbar bg-black font-fjalla'>
      {/*  */}
      <div className='navbar-start'></div>
      <div className='navbar-center  w-4/5 flex justify-between'>
        <Link className='text-md ' href='/about-us'>
          About Us
        </Link>
        <Link className='text-md ' href='/contact'>
          Contact
        </Link>
        <Link className='text-md ' href='/blog'>
          Blog
        </Link>

        <Link className='text-md ' href='/'>
          <img src='/nav_logo.webp' alt='logo' className='h-24 w-24' />
        </Link>

        <Link className='text-md ' href='/faq'>
          FAQ
        </Link>
        <Link className='text-md ' href='/gallery'>
          Gallery
        </Link>
        <Link className='text-md' href='/'>
          Book A Tour
        </Link>

        {/* Language Select */}
      </div>
      <div className='navbar-end'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
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
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0 '
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
