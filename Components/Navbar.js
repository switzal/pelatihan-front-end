import React from "react";
import Link from 'next/link'
export const Navbar = () => {
  
  return (
    <>
      <nav className="nav bg-putih fixed top-0 left-0 w-full flex items-center z-10 ">
      <div className="flex items-center justify-between w-full gap-x-32 py-4 px-20 w-381 shadow relative sm:px-4">
          <div className="md:flex">
            <Link href="/" className='h-full w-full object-cover md:h-full md:w-full'>
              <img src="/images/Logo heylaw 2.svg" className="sm:h-8 ml-4 h-6 " />
            </Link>
          </div>

          <div class="flex md:order-2">
              <button type="button" class="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green dark:hover:bg-green dark:focus:ring-green"><Link href="https://heylawedu.id">HeylawEdu</Link></button>
              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div className="hidden text-grey font-bold text-base md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex items-center gap-x-10 ">
              <li className="border-b-2 border-green text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="border-b-2 border-transparent hover:border-green text-grey ">
                <Link href="#">FAQ</Link>
              </li>
              <li className="border-b-2 border-transparent hover:border-green text-grey ">
                <Link href="/tentangkami">Tentang Kami</Link>
              </li>
              <li className="border-b-2 border-transparent hover:border-green text-grey">
                <Link href="#">Blog</Link>
              </li>
              <li className="border-b-2 border-transparent hover:border-green text-grey">
                <Link href="https://heylawedu.id">Heylaw Edu</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};