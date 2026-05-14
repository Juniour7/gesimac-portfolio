import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi"; // Added download icon

function Hero() {
  return (
    <section id="hero" className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt={user_info.main.name}
          />

          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            {/* =========== BUTTONS SECTION =========== */}
            <div className="flex gap-4 mt-10 flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-zinc-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black font-medium transition-all duration-300"
              >
                Projects
              </a>
              
              {/* NEW DOWNLOAD CV BUTTON */}
              <a
                href={user_info.main.cv_url} 
                target="_blank" 
                rel="noreferrer"
                download
                className="px-6 py-3 bg-red-800 text-white hover:bg-red-900 transition-all duration-300 flex gap-2 items-center font-medium"
              >
                <span>Download CV</span>
                <HiOutlineDownload className="text-xl" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt={user_info.main.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;