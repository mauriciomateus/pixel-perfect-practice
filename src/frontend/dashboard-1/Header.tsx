import { supremaRegular, supremaSemibold } from "@/fonts";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between">
        <div>
          <h1 className={`text-[43px] ${supremaSemibold.className} leading-11 text-dark-gray`}>
            Weekly sumup
          </h1>
          <p className={`text-[16px] mt-0.75 ${supremaRegular.className} text-dark-gray`}>
            Get summary of your weekly online transactions here.
          </p>
        </div>

        <nav className="flex items-center ">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.00009 0H19.0001C20.1001 0 21.0001 0.9 21.0001 2V14C21.0001 15.1 20.1001 16 19.0001 16H3.00009C1.90009 16 1.00009 15.1 1.00009 14V2C1.00009 0.9 1.90009 0 3.00009 0Z"
              fill="#E3E3E3"
            />
            <path
              d="M21.0001 2L11.0001 9L1.00009 2"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            className="ml-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
              fill="#E3E3E3"
            />
            <path
              d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21"
              stroke="#E3E3E3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="17.7015" cy="4.69834" r="3.97196" fill="#BB4430" />
          </svg>

          <svg
            className="ml-6 -translate-y-px"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1_300"
              style={{ "mask-type": "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="36"
              height="36"
            >
              <circle cx="17.5292" cy="17.5292" r="17.5292" fill="#FFC145" />
            </mask>
            <g mask="url(#mask0_1_300)">
              <circle cx="17.5292" cy="17.5292" r="17.5292" fill="#FFC145" />
              <path
                d="M17.5277 20.9871C20.5191 20.9871 22.9441 18.5621 22.9441 15.5707C22.9441 12.5793 20.5191 10.1543 17.5277 10.1543C14.5363 10.1543 12.1113 12.5793 12.1113 15.5707C12.1113 18.5621 14.5363 20.9871 17.5277 20.9871Z"
                fill="white"
              />
              <path
                d="M28.3619 37.1468V33.566C28.3619 31.6666 27.7913 29.845 26.7755 28.5019C25.7597 27.1588 24.382 26.4043 22.9455 26.4043H12.1127C10.6762 26.4043 9.29849 27.1588 8.28272 28.5019C7.26694 29.845 6.69629 31.6666 6.69629 33.566V37.1468"
                fill="#197BBD"
              />
            </g>
          </svg>

          <div className="flex flex-col text-[14px] ml-2.25">
            <span className={`${supremaSemibold.className} translate-y-px `}>
              Andrew
            </span>
            <span className={`${supremaRegular.className} -translate-y-0.5`}>
              Admin account
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
