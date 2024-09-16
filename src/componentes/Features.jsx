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
              Viví tu aventura y compartila con viajeros de todo el mundo.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Explorá Argentina como nunca antes, siguiendo itinerarios que
              despiertan tu curiosidad. ¡Creá, seguí y compartí aventuras épicas
              con nuestra comunidad de viajeros apasionados!
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Ver más publicaciones
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
              Crea tu itinerario y compartilo con otros viajeros.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Personaliza tu viaje, ya sea solo o con amigos, usando nuestro
              calendario interactivo.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary bg-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Comenzar a planificar
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

      {/* RED SOCIAL */}
      {/*       <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Explora nuestras redes sociales
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Provides advanced features like time tracking, integrating with
              third party apps (calendar / Google drive), creating subtasks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  md:max-w-2xl lg:max-w-full">
            <div className="relative w-full h-auto ">
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
                  Tiktok
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  We’ve eliminated old analogue process with state-of-the art
                  tech{" "}
                </p>
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
                  Social
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  Every life plan policy has a built-in wealth bonus, and we
                  contribute too{" "}
                </p>
                 <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                              View More
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                  
                          </button> 
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="my-20  flex justify-center items-center flex-col gap-y-5">
        <div >
        <h2 className="text-center font-bold text-2xl max-w-[250px]">
          Descubri destinos increibles y aprende más sobre ellos con nuestro
          mapa interactivo
        </h2>
        </div>
        
        
        <div className=" flex justify-between items-center h-[100vh]  ">
          <svg width="500" height="900" viewBox="305 275 463 696">
            <g>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40] transition-all duration-500"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M498 662L496 664L498 663zM454 671L454 691L465 694L469 692L472 693L473 690L466 688L454 676L456 673zM507 665L510 666L511 664L509 664L515 662L513 660L515 660L512 659L512 661L512 659L509 658L508 663L507 662L505 664L507 668L507 665zM502 659L503 660L500 659L500 661L502 662L501 661L500 662L502 662L500 662L500 664L497 665L499 667L502 664L504 664L507 659L503 659zM478 691L476 691L479 692L481 690L479 691zM504 658L506 659L504 658zM504 666L504 666zM504 667L504 668zM589 0z   "
                aria-describedby="leaflet-tooltip-835"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M456 556L456 548L448 545L443 538L439 542L439 550L441 557L438 558L436 564L437 565L435 567L435 573L438 574L440 573L439 572L441 570L445 569L446 565L448 565L455 558L457 558L456 556z"
                aria-describedby="leaflet-tooltip-997"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M465 509L461 509L462 520L465 523L465 536L474 537L473 517L475 512L473 512L473 510L471 509L465 509z"
                aria-describedby="leaflet-tooltip-793"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M509 483L493 483L491 499L492 501L490 508L492 517L486 526L493 526L498 520L501 519L498 513L499 508L505 501L505 493L509 484z"
                aria-describedby="leaflet-tooltip-816"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M472 497L468 489L466 489L467 488L465 485L462 486L456 484L453 481L448 485L452 489L451 494L455 494L461 500L463 507L465 509L469 509L471 499z"
                aria-describedby="leaflet-tooltip-844"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M468 472L467 471L466 473L464 471L466 467L464 465L454 465L454 472L456 476L454 478L453 477L451 481L461 486L465 485L466 488L470 491L472 497L475 495L475 488L473 488L474 484L469 481L468 472z"
                aria-describedby="leaflet-tooltip-845"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M477 472L468 472L468 478L471 483L474 482L477 473z"
                aria-describedby="leaflet-tooltip-815"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M512 476L496 462L494 462L494 460L489 458L489 460L483 468L493 468L493 483L509 483L511 478L510 477L512 476z"
                aria-describedby="leaflet-tooltip-842"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M512 476L513 471L517 467L514 464L509 463L506 460L497 456L490 450L490 448L489 458L494 460L494 462L496 462L512 476z"
                aria-describedby="leaflet-tooltip-841"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M459 612L437 612L435 614L435 623L434 622L434 624L432 624L433 625L431 629L433 631L432 634L431 633L431 637L429 637L428 640L426 639L425 647L428 654L430 652L433 653L432 661L435 663L435 665L446 665L455 668L452 661L448 661L452 660L451 655L449 656L451 654L451 651L455 648L453 646L454 644L454 646L457 647L460 638L464 633L466 633L470 629L468 627L467 628L470 625L470 623L463 620L460 617L460 613z"
                aria-describedby="leaflet-tooltip-843"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M474 581L433 582L433 586L437 594L435 598L440 601L438 603L434 603L438 606L437 609L436 608L436 612L459 612L463 606L467 604L471 605L470 602L473 599L472 595L474 590L478 588L474 586L477 585L479 586L479 588L482 587L481 581L478 583L480 583L479 584L477 584L474 581z"
                aria-describedby="leaflet-tooltip-790"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M461 512L457 510L453 512L451 509L448 510L445 514L445 518L447 518L447 524L445 526L444 531L442 532L444 534L443 537L448 545L452 547L453 546L455 548L455 537L465 537L466 534L466 529L464 527L465 522L462 519L461 512z"
                aria-describedby="leaflet-tooltip-783"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M491 499L488 498L487 495L474 493L475 495L472 497L470 503L470 509L475 511L474 530L483 530L483 526L486 526L492 517L493 515L490 510L492 501z"
                aria-describedby="leaflet-tooltip-788"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M512 523L511 520L514 516L513 509L515 501L511 497L509 497L504 500L505 501L499 508L498 513L503 520L512 523z"
                aria-describedby="leaflet-tooltip-839"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M448 486L446 490L447 497L444 500L444 504L443 503L445 514L448 512L448 510L451 509L452 512L456 510L461 512L462 508L465 509L459 498L451 493L452 490L448 486z"
                aria-describedby="leaflet-tooltip-836"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M473 446L468 444L462 450L462 456L465 459L468 454L468 457L472 461L476 461L479 459L479 455L475 455L475 453L472 450L473 446z"
                aria-describedby="leaflet-tooltip-936"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M493 483L493 468L478 468L473 487L475 489L475 493L487 495L488 498L491 499z"
                aria-describedby="leaflet-tooltip-837"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M458 548L456 548L457 557L448 565L446 565L446 567L443 570L441 570L439 574L435 573L436 580L474 581L473 573L475 571L480 574L487 573L483 571L483 561L480 558L468 556L467 557L460 553L458 551L458 548z"
                aria-describedby="leaflet-tooltip-791"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M525 479L521 481L512 478L509 480L509 484L505 492L505 498L511 497L515 501L515 499L528 484L525 479zM520 479L521 480L520 479zM517 479L517 479zM521 480L521 480zM520 480L520 480z"
                aria-describedby="leaflet-tooltip-838"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M527 484L529 484L539 476L538 468L533 468L532 474L527 479L525 479L527 483z"
                aria-describedby="leaflet-tooltip-840"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M489 448L487 446L482 445L480 445L478 451L476 446L472 448L475 455L479 455L479 459L476 462L472 460L471 461L470 458L468 457L468 454L465 459L462 456L461 458L454 462L455 465L464 465L466 467L464 471L466 473L468 471L470 473L470 471L478 471L478 468L482 468L489 460z"
                aria-describedby="leaflet-tooltip-814"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M483 530L474 530L474 537L455 537L456 548L459 549L458 551L460 553L467 557L468 556L480 558L483 561z"
                aria-describedby="leaflet-tooltip-792"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M512 523L507 522L501 518L497 520L493 526L483 526L483 571L487 573L490 572L489 565L491 563L491 560L489 560L489 556L491 558L508 556L515 553L522 543L521 540L518 538L518 531L512 527L511 528L512 523zM491 559L492 559zM491 558L491 558zM490 568L491 569zM491 559L491 559zM490 569L490 570zM512 524L512 524z"
                aria-describedby="leaflet-tooltip-789"
              ></path>
              <path
                class="leaflet-interactive hover:fill-[#18a0fb40]"
                stroke="#555"
                stroke-opacity="1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#18a0fb"
                fill-opacity="1"
                fill-rule="evenodd"
                d="M512 527L511 528L512 527z"
                aria-describedby="leaflet-tooltip-846"
              ></path>
            </g>
          </svg>
          <div>
          <p>TEXTO</p></div>
        </div>
      </section>
    </>
  );
}

export default Features;
