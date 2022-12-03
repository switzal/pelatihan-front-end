import React from 'react'

export const Footer = () => {
  return (
    <>
    <div>
      <footer className="bg-gray2 mt-12 pb-4">
        <div className="container">
          <div className="flex flex-wrap px-8">
            <div className="mb-10 w-full px-10 text-left md:w-1/3 text-grey mt-10">
              <img src="/images/Logo heylaw 2.svg" className="h-[28.76] w-[155px] mb-5" />
              <h2 className="mb-5 text-xl font-semibold ">PT. Prawira Bahagia Selalu</h2>
              <h3 className="text-lg font-medium mb-4 ">Jasa layanan hukum</h3>
              <p className="text-sm font-normal ">Jl.Raya Pondok Cabe Blok B5 No.6 Kav.77</p>
              <p className="text-sm font-normal mb-5 ">Tanggerang Selatan</p>
              <p className="text-sm font-normal">Telepon/SMS/WA/: 0813 8002 2929</p>
              <p className="text-sm font-normal">Email : Info@heylaw.id</p>
            </div>
            <div className="mb-10 w-full px-28 md:w-1/3 mt-10 text-left">
              <h1 className="text-lg font-semibold text-grey mb-10">Tentang Kami</h1>
              <ul className="text-grey">
                <li>
                  <a href="#" class="mb-10 inline-block text-lg font-semibold">FAQ</a>
                </li>
                <li>
                  <a href="#" class="mb-10 inline-block text-lg font-semibold">Kontak Kami</a>
                </li>
                <li>
                  <a href="#" class="inline-block text-lg font-semibold">Syarat & Ketentuan</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-32 md:w-1/3 mt-10">
              <h3 className="mb-8 text-grey text-lg font-semibold">Get the App</h3>
              <ul className="">
                <li>
                  <a>
                    <img src="/images/Playstore 2.png" className="mb-8"/>
                  </a>
                </li>
                <li>
                  <a className="text-lg font-semibold text-grey">Ikuti Kami</a>
                </li>
              </ul>
              <div className="grid grid-cols-4 md:grid-cols-6 mt-8 mb-5">
                <a href="#">
                  <img src="/images/facebook 1.png" />
                </a>
                <a href="#">
                  <img src="/images/instagram 1.png" />
                </a>
                <a href="#">
                  <img src="/images/twitter 1.png" />
                </a>
                <a href="#">
                  <img src="/images/youtube 1.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};
