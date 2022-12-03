import Head from 'next/head'
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='container-xl'>
      <Head>
        <title>Tentang Kami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              <li className="border-b-2 border-transparent hover:border-green text-grey">
                <Link href="/">Home</Link>
              </li>
              <li className="border-b-2 border-transparent hover:border-green text-grey ">
                <Link href="#">FAQ</Link>
              </li>
              <li className="border-b-2 border-green text-black ">
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

        <div className='mb-28 mt-16'>
            <div className='absolute'>
              <img src="/images/Group 32.png" className="responsive mb-10"/>
            </div>
            <div className='relative p-20'>
              <h1 className='text-4xl text-center font-extrabold mt-2 text-putih'>Tentang Kami</h1>
            </div>
          </div>

          <div className='container flex flex-wrap text-justify px-28 tracking-wide text-lg'>
            <p className='mb-2'>
            HeyLaw didirikan oleh pemerhati hukum dan teknologi. Beberapa pendirinya adalah Awaludin Marwan, PhD, lulusan doktor Universitas Belanda, Wahyu Agung Pramudito, PhD lulusan doktor Universitas Manchester Inggris, Dr. Bambang Pratama akademisi dan peneliti hukum siber, az Zahra F Sunandi, MSc lulusan University College London, Andi Tri Haryono, MM akademisi di bidang ekonomi digital, dan beberapa kolega yang lain. Fokus layanan yang disediakan adalah link and match antara kebutuhan hukum di masyarakat dengan memanfaatkan teknologi informasi, salah satunya adalah membantu mempertemukan pengacara dan konsultan hukum yang tepat dan terpercaya.
            </p>
            <p>
            Pengembangan platform HeyLaw di masa mendatang adalah berinovasi untuk memenuhi kebutuhan berhukum bagi praktisi dan masyarakat yang memerlukan layanan hukum secara mudah, cepat dan tepat sasaran.
            </p>
          </div>

          <div className="container text-center mt-10 mb-20">
            <h1 className="text-4xl py-10 font-bold mb-10">
                <span className="text-green text-center">Layanan</span> Kami
            </h1>
            <div className="flex flex-wrap ml-20 md:flex">
              <div className="w-full px-5 lg:w-1/2 xl:w-1/3">
                <div className="mb-10 p-6 max-w-sm bg-white rounded-lg border-gray shadow-lg dark:bg-gray">
                  <div className="columns-2 px-2 mb-6 mx-10 max-w-sm">
                    <img src="/images/008-consultation 1.png" className="w-[76px]" />
                    <h1 className="font-bold text-2xl lg:mx-auto">Konsultasi</h1>
                    <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                  </div>
                  <div className="py-4 px-4">
                    <p>Temukan pengacara yang cocok buatmu</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-5 lg:w-1/2 xl:w-1/3">
                <div className="p-6 mb-10  max-w-sm bg-white rounded-lg border-gray shadow-lg dark:bg-gray">
                  <div className="columns-2 px-2 mb-8 mx-10 max-w-sm">
                    <img src="/images/Group 19.png" className="w-[76px]" />
                    <h1 className="font-bold text-2xl lg:mx-auto">Kontrak</h1>
                    <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                  </div>
                  <div className="py-4 px-4">
                    <p>Bikin kontrak mudah, tak perlu repot-repot</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-5 lg:w-1/2 xl:w-1/3">
                <div className="p-6  mb-10 max-w-sm bg-white rounded-lg border-gray shadow-lg dark:bg-gray">
                  <div className="columns-2 px-2  mx-10 max-w-sm">
                    <img src="/images/Group.png" className="w-[56px]" />
                    <h1 className="font-bold text-2xl lg:mx-auto">Kamus</h1>
                    <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                  </div>
                  <div className="py-4 px-4">
                    <p>Kata kata hukum susah dipelajari? Ah, kata siapa. Buka aja kamus hukum ini</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div>
        <Footer />
        <div className="fixed top-0 left-0 -z-0 w-full flex">
              <div className="h-[85px] w-[85px] object-cover md:h-[85px] md:w-[85px]">
               <img src="/images/Chat customer.png" className="mt-[550px] ml-[1250px]"/>
              </div>
            </div>
    </div>
    </div>
    
    
  )
}