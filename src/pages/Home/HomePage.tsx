
// import { OurRecentProjects } from "../../components/OurRecentProjects"
import { Link } from "react-router-dom"
import { FeatureCard_1 } from "../../components/FeatureCard_1"
import getBaseUrl from "../../utils/base-url"
import { ApplicationRoutes } from "../../routes"

function HomePage() {

  return (
    <div className="w-full h-max relative pb-10">

      <div className="absolute top-0 w-max h-[28rem] grid grid-cols-[5rem_5rem_5rem_5rem] lg:grid-cols-[12rem_12rem_12rem_12rem] gap-5 md:gap-10
      left-1/2 -translate-x-1/2 z-20">

        <div className="bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="bg-gradient-to-b from-white/5 to-transparent"></div>

      </div>


      {/* hero */}

      <div className="w-full h-screen relative flex items-center justify-center flex-col gap-y-4 z-10">
        <img
          loading="lazy"
          alt=""
          src={getBaseUrl() + "/image-3.jpg"}
          className="w-96 -z-10 h-auto absolute top-0 left-1/2 -translate-x-1/2 opacity-70 blur-sm"
        />

        <div className="bg-clip-text bg-gradient-to-r from-gray-100 to-gray-800">
          <p className="text-5xl max-md:hidden text-transparent font-medium">
            Do perfect Think Better With <span className="text-gray-200 text-5xl">UrmuTech</span>
          </p>

          <div className="flex flex-col gap-y-4 md:hidden">
            <p className="text-5xl text-transparent font-medium">
              Do perfect
            </p>
            <p className="text-5xl text-transparent font-medium">
              Think Better
            </p>
            <p className="text-5xl text-transparent font-medium">
              <span className="text-gray-200 text-5xl">UrmuTech</span>
            </p>
          </div>
        </div>

        <p className="text-base text-white/30 font-normal tracking-wide px-4 text-center">
          Our passion is to deliver best quality products to you.
        </p>
      </div>



      <div className="w-full pt-12 md:pl-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-black">

        <div className="h-max my-auto max-md:order-2 max-md:px-4">
          <p className="text-gray-100 flex flex-col gap-y-1 flex-shrink-0">
            <span className="text-5xl font-bold">Where</span>
            <span className="text-5xl font-bold">Your Dreams</span>
            <span className="text-5xl font-bold">Become True</span>
          </p>

          <p
            className="text-base text-gray-200 tracking-wide mt-8"
          >
            We're not just another startup — we have a genuine love for the web development field. Our enthusiasm for this industry fuels our motivation to deliver outstanding results. From brainstorming ideas to bringing them to life, our team pours their heart and soul into every project we undertake. Trust us to harness our passion to create the perfect digital solution for your business.
          </p>

        </div>

        <img
          loading="lazy"
          alt=""
          src={getBaseUrl() + "/image-2.jpg"}
          decoding="async"
          className="w-full h-auto object-center object-cover max-md:order-1"
        />
      </div>

      <div className="w-full pt-12 md:pr-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-black">

        {/* <img
          loading="lazy"
          alt=""
          src={getBaseUrl() + "/image-4.png"}
          decoding="async"
          className="w-auto h-auto object-center object-cover -scale-x-100  opacity-70"
        /> */}

        <img
          src={getBaseUrl() + "/cutting-edge-tech.gif"}
          alt=""
          className="w-[40rem] h-auto border"
          loading="lazy"
          decoding="async"
        />

        <div className="h-max my-auto max-md:px-4">
          <p className="text-gray-100 flex flex-col gap-y-1 flex-shrink-0">
            <span className="text-5xl font-bold">Cutting-edge</span>
            <span className="text-5xl font-bold">Technology</span>
          </p>

          <p
            className="text-base text-gray-200 tracking-wide mt-8"
          >
            We stay at the forefront of the web development industry by utilizing the best and latest tools available. Our team stays updated with emerging trends, enabling us to provide you with innovative solutions. With our commitment to using the most advanced technologies, we ensure that each app or website we deliver is truly exceptional.
          </p>

        </div>

      </div>

      <div className="w-full md:pl-8 max-md:mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-black">

        <div className="h-max md:m-auto max-md:px-4">
          <p className="text-gray-100 flex flex-col gap-y-2 flex-shrink-0">
            <span className="text-4xl md:text-5xl font-bold">Are You Ready</span>
            <span className="text-4xl md:text-5xl font-bold">To Discover Your</span>
            <span className="text-4xl md:text-5xl font-bold">Big New Idea ?</span>
          </p>

          <Link
            to={ApplicationRoutes.pages.orderProject}
            className="self-stretch py-2.5 px-8 rounded-lg bg-gray-50 appearance-none text-gray-900 font-medium
                transition-transform active:scale-95 duration-300 mt-12 inline-block"
          >
            Order Project
          </Link>
        </div>

        <img
          loading="lazy"
          alt=""
          src={getBaseUrl() + "/butter-fly.gif"}
          decoding="async"
          className="w-[36rem] h-auto object-center object-cover opacity-70"
        />

      </div>


      <div className="w-full mt-20 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-3">

        <div>
          <FeatureCard_1
            title="Intuitive Web Apps"
            desc="Our web apps are designed to provide users with a native app-like experience, ensuring a seamless and intuitive interface."
          />
        </div>

        <div>
          <FeatureCard_1
            title="Hybrid Apps"
            desc="We develop visually stunning hybrid apps that work seamlessly across multiple platforms, offering a native app look and feel."
          />
        </div>

        <div>
          <FeatureCard_1
            title="Full-Stack"
            desc="With our dedicated backend team, we have the expertise to create and deliver full-stack applications, allowing us to handle all aspects of your project from start to finish."
          />
        </div>

        <div className="lg:col-span-3">
          <FeatureCard_1
            title="Performance"
            desc="We prioritize delivering high-performance apps and apply the best practices to create performant applications and enhance the user experience."
          />
        </div>

      </div>

      <div className="mt-20 md:mt-12 w-full">

        <p className="text-4xl px-4 md:px-8 text-gray-100 font-medium">Recent Projects</p>

        <div className="w-full mt-8 px-4">
          <p className="w-full text-center text-2xl md:text-3xl text-gray-400 font-medium tracking-wide">
            Nothing :)
          </p>
          <p className="w-full text-center text-2xl md:text-3xl text-gray-400 font-medium tracking-wide mt-2">
            Would You Like To Be Our First ?
          </p>
          <Link
            to={ApplicationRoutes.pages.orderProject}
            className="self-stretch py-2.5 px-8 rounded-lg bg-gray-50 appearance-none text-gray-900 font-medium
                transition-transform active:scale-95 duration-300 mt-6 block mx-auto w-max text-center"
          >
            Order Project
          </Link>
          {/* <OurRecentProjects /> */}
        </div>

      </div>

    </div>
  )
}

export default HomePage