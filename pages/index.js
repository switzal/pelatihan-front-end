import Head from 'next/head'
import { Navbar } from "../Components/Navbar";
import { Section } from "../Components/Section";
import { Footer } from "../Components/Footer";

export default function Home() {
  return (
    <div className='container-xl'>
      <Head>
        <title>switzal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Section/>
      <Footer />
      <div className="fixed top-0 left-0 -z-0 w-full flex">
        <div className="h-[85px] w-[85px] object-cover md:h-[85px] md:w-[85px]">
          <img src="/images/Chat customer.png" className="mt-[550px] ml-[1250px]"/>
        </div>
      </div>
    </div>
  )
}
