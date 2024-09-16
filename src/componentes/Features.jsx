import posts from "../../public/Group 2061.png";
import calendar from "../../public/calendar.png";

import calendarbg from "../../public/Rectangle 193.svg";
import mapa from "../../public/mapa.svg";

import ScrollingText from "./ScrollingText";

function Features() {
  return (
    <>
      <ScrollingText></ScrollingText>

      <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full " src={posts} alt="dashboard image" />
          <img
            className="w-full hidden "
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Let&apos;s create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div
          /*           style={{
            backgroundImage: `url(${calendarbg})`,
            backgroundSize: "auto auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }} */
          className="mt-4 static  text-white gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
        >
          <div className="mt-4 z-10 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Let&apos;s create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary bg-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <img
            className="h-full mt-4 z-10"
            src={calendar}
            alt="dashboard image"
          />

          <div className="absolute z-0 botton-0 left-0">
            <img
              className="h-full w-screen"
              src={calendarbg}
              alt="dashboard image"
            />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Let&apos;s create more tools
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Provides advanced features like time tracking, integrating with
              third party apps (calendar / Google drive), creating subtasks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  md:max-w-2xl lg:max-w-full">
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-primary-2 rounded-2xl flex  justify-between flex-row flex-wrap">
              <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                <div className="block">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7.88304C3 6.49159 3 5.79587 3.37752 5.2721C3.75503 4.74832 4.41505 4.52832 5.73509 4.0883L9 3V19L8.26491 19.245C5.86241 20.0459 4.66116 20.4463 3.83058 19.8476C3 19.249 3 17.9828 3 15.4503V7.88304Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      className="my-path"
                    ></path>
                    <path
                      d="M9 3L15 5V21L9 19V3Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      className="my-path"
                    ></path>
                    <path
                      d="M15 5.00018L15.7351 4.75515C18.1376 3.95431 19.3388 3.5539 20.1694 4.15255C21 4.75119 21 6.01742 21 8.54988V16.1171C21 17.5086 21 18.2043 20.6225 18.7281C20.245 19.2519 19.5849 19.4719 18.2649 19.9119L15 21.0002V5.00018Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      className="my-path"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Accomplish tasks swiftly with online tools.
                </h3>
                <p className="text-xs font-normal text-white w-full mb-8 xl:w-64">
                  Get quoted and covered in under 10 minutes online. no
                  paperwork or waiting any more{" "}
                </p>
                {/*  <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                  View More
                                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                      
                              </button> */}
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <img
                  src="../../public/Purple App Example.png"
                  alt="Header tailwind Section"
                  className="h-full ml-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-primary-3 rounded-2xl p-5  xl:p-8 h-full">
              <div className="block">
              <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5Z"
                    stroke="white"
                    strokeWidth="2"
                    className="my-path"
                  ></path>
                  <path
                    d="M14 6.5C14 5.09554 14 4.39331 14.3371 3.88886C14.483 3.67048 14.6705 3.48298 14.8889 3.33706C15.3933 3 16.0955 3 17.5 3C18.9045 3 19.6067 3 20.1111 3.33706C20.3295 3.48298 20.517 3.67048 20.6629 3.88886C21 4.39331 21 5.09554 21 6.5C21 7.90446 21 8.60669 20.6629 9.11114C20.517 9.32952 20.3295 9.51702 20.1111 9.66294C19.6067 10 18.9045 10 17.5 10C16.0955 10 15.3933 10 14.8889 9.66294C14.6705 9.51702 14.483 9.32952 14.3371 9.11114C14 8.60669 14 7.90446 14 6.5Z"
                    stroke="white"
                    strokeWidth="2"
                    className="my-path"
                  ></path>
                  <path
                    d="M14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5Z"
                    stroke="white"
                    strokeWidth="2"
                    className="my-path"
                  ></path>
                  <path
                    d="M3 17.5C3 16.0955 3 15.3933 3.33706 14.8889C3.48298 14.6705 3.67048 14.483 3.88886 14.3371C4.39331 14 5.09554 14 6.5 14C7.90446 14 8.60669 14 9.11114 14.3371C9.32952 14.483 9.51702 14.6705 9.66294 14.8889C10 15.3933 10 16.0955 10 17.5C10 18.9045 10 19.6067 9.66294 20.1111C9.51702 20.3295 9.32952 20.517 9.11114 20.6629C8.60669 21 7.90446 21 6.5 21C5.09554 21 4.39331 21 3.88886 20.6629C3.67048 20.517 3.48298 20.3295 3.33706 20.1111C3 19.6067 3 18.9045 3 17.5Z"
                    stroke="white"
                    strokeWidth="2"
                    className="my-path"
                  ></path>
                </svg>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Improved technology yields greater value
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                We’ve eliminated old analogue process with state-of-the art tech{" "}
              </p>
              {/* <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                              View More
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                  
                          </button> */}
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-primary-4 rounded-2xl p-5 xl:p-8 h-full">
              <div className="block">
              <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 20.0024V15.0024M8 20.0024C8 20.5547 8.44772 21.0024 9 21.0024H15C15.5523 21.0024 16 20.5547 16 20.0024M8 20.0024H3C2.44772 20.0024 2 19.5547 2 19.0024V15.0024C2 13.3456 3.34315 12.0024 5 12.0024C6.65685 12.0024 8 13.3456 8 15.0024M16 20.0024V15.0024M16 20.0024H21C21.5523 20.0024 22 19.5547 22 19.0024V15.0024C22 13.3456 20.6569 12.0024 19 12.0024C17.3431 12.0024 16 13.3456 16 15.0024M16 15.0024C16 13.3456 14.6569 12.0024 13 12.0024H11C9.34315 12.0024 8 13.3456 8 15.0024M15 6.00244C15 7.6593 13.6569 9.00244 12 9.00244C10.3431 9.00244 9 7.6593 9 6.00244C9 4.34559 10.3431 3.00244 12 3.00244C13.6569 3.00244 15 4.34559 15 6.00244ZM6.5 7.50244C6.5 8.33087 5.82843 9.00244 5 9.00244C4.17157 9.00244 3.5 8.33087 3.5 7.50244C3.5 6.67401 4.17157 6.00244 5 6.00244C5.82843 6.00244 6.5 6.67401 6.5 7.50244ZM20.5 7.50244C20.5 8.33087 19.8284 9.00244 19 9.00244C18.1716 9.00244 17.5 8.33087 17.5 7.50244C17.5 6.67401 18.1716 6.00244 19 6.00244C19.8284 6.00244 20.5 6.67401 20.5 7.50244Z"
                    stroke="white"
                    strokeWidth="2"
                    className="my-path"
                  ></path>
                </svg>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Build wealth with insurance planning
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                Every life plan policy has a built-in wealth bonus, and we
                contribute too{" "}
              </p>
              {/* <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                              View More
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                  
                          </button> */}
            </div>
          </div>
        </div>
        </div>

       
      </section>

      <div
        className="w-full h-96 mt-14"
        style={{
          backgroundImage: `url(${mapa})`,
          backgroundSize: "",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}

export default Features;
