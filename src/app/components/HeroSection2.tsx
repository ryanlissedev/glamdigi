/* This example requires Tailwind CSS v2.0+ */
export default function Hero2() {
  return (
    <div className="relative mt-4 max-w-full overflow-hidden  rounded-3xl  bg-gray-1000 text-4xl text-[#F9D8DD] dark:bg-[#d8b699] dark:text-gray-900">
      <div className="items-center justify-center pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 ">
        <div className="relative mx-auto w-full  sm:static sm:px-6 lg:px-24">
          <div className="sm:max-w-lg">
            <h1 className="   font-futur text-8xl uppercase tracking-tight text-[#F9D8DD] dark:text-gray-900 md:text-7xl">
              Direct meer salon afspraken via Social Media
            </h1>
            <p className="mt-4 text-xl  text-zinc-200 dark:text-gray-100">
              Wil je meer afspraken en omzet? <br /> Investeer in social media
              marketing en plan een gratis gesprek met een van onze beauty
              marketeers
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"></div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mb-2 mt-4 w-2/6 rounded-full border-4 border-gray-300 px-5 py-2.5  text-lg font-extrabold dark:border-gray-200 dark:text-gray-100 "
              >
                Ja, Plan een gesprek
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
