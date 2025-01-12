import React, { useState } from "react";
import OurPortfoilio from "../../component/pages/portfoilio/OurPortfoilio";
import PortfolioDesign from "../../component/portfolio/PortfolioDesign";
import FooterTop from "../../component/layout/FooterTop";

export default function Portfolio() {  
  const gridItems = Array(15).fill(null);
  // console.log(gridItems);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
      <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://codeyesmedia.com/codeyes-media-video-2024/lead-genreation-digital-marketing-codeyes-media-production-house-agency1.mp4"
                />
        {/* <div className="absolute top-0 left-0 w-full h-full grid grid-cols-5 "> */}
        {/* {gridItems.map((_, index) => (
                        <div
                            key={index}
                            className="relative border border-black rounded-3xl video_overlay"
                        >
                          
                        </div>
                    ))} */}
        <div class="qodef-shortcode qodef-m  qodef-memory-cards qodef-layout--default">
          <div class="qodef-background-image"></div>
          <div class="qodef-grid-inner">
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
            <article>
              <div class="qodef-m-top-holder"></div>
            </article>
          </div>
        </div>
      </div>
      {/* </div> */}

      <PortfolioDesign />
      <div
        className={`pt-12`}
        style={{ background: `url(/image/home/bacground-img.png)` }}
      >
        <FooterTop />
      </div>
    </>
  );
}

// import React, { useState } from 'react'
// import OurPortfoilio from '../../component/pages/portfoilio/OurPortfoilio'

// export default function Portfolio() {

//     return (
//         <>
//             <div class="">
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline src="https://randall.qodeinteractive.com/wp-content/uploads/2023/04/pexels-c-technical-6491683.mp4"></video>
//             </div>

//             <div className={`py-10 sm:!py-36`}>
//                 <div className={`custom_container grid lg:grid-cols-12`}>
//                     <div className={`col-span-8 relative`}>
//                         <span className={`absolute hidden sm:block z-0 right-10 md:right-40 lg:right-32 bottom-10`}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="177.647" height="174.918" viewBox="0 0 177.647 174.918">
//                                 <defs>
//                                     <radialGradient id="radial-gradient22" cx="0.5" cy="0.5" r="0.521" gradientTransform="matrix(-0.242, -0.97, 1.147, -0.287, 0.047, 1.128)" gradientUnits="objectBoundingBox">
//                                         <stop offset="0" stop-color="#ffde8b"></stop>
//                                         <stop offset="1" stop-color="#f0ead8" stop-opacity="0.369"></stop>
//                                         <stop offset="1" stop-color="#ecece4" stop-opacity="0"></stop>
//                                     </radialGradient>
//                                 </defs>
//                                 <g data-name="Group 683" transform="translate(9107.265 -10047.122) rotate(138)">
//                                     <path data-name="Path 120" d="M18635.391-2832.876a10.327,10.327,0,0,1-3.6-.648,10.334,10.334,0,0,1-6.094-13.28c1.178-3.183,29.625-78.273,94.465-105.652a10.345,10.345,0,0,1,7.918-.054,10.327,10.327,0,0,1,5.629,5.561,10.341,10.341,0,0,1-5.5,13.547c-56.5,23.853-82.863,93.1-83.127,93.794A10.35,10.35,0,0,1,18635.391-2832.876Z" transform="translate(-5186.495 1396.86)" fill="url(#radial-gradient22)"></path>
//                                     <path data-name="Path 121" d="M18742.256-2845.587a10.328,10.328,0,0,1-8.508-4.455c-8.105-11.7-73.748-56.438-113.217-81.887a10.344,10.344,0,0,1-3.082-14.294,10.332,10.332,0,0,1,14.287-3.087c17.623,11.364,106.2,68.986,119.008,87.5a10.336,10.336,0,0,1-2.613,14.387A10.3,10.3,0,0,1,18742.256-2845.587Z" transform="translate(-5204.566 1401.38)" fill="url(#radial-gradient22)"></path>
//                                     <path data-name="Path 122" d="M18635.4-2910.213a10.329,10.329,0,0,1-10.242-9.067,10.342,10.342,0,0,1,8.98-11.534c22.438-2.78,96.863-11.528,112.869-7.239a10.337,10.337,0,0,1,7.322,12.659,10.341,10.341,0,0,1-12.656,7.315c-8.268-2.208-60.934,2.322-104.986,7.785a10.328,10.328,0,0,1-1.287.08Z" transform="translate(-5207.999 1424.34)" fill="url(#radial-gradient22)"></path>
//                                     <path data-name="Path 123" d="M18662.021-2819.25a10.38,10.38,0,0,1-4.4-.976c-30.133-14.063-23.65-117.686-19.721-128.9a10.335,10.335,0,0,1,13.174-6.339,10.343,10.343,0,0,1,6.342,13.176c-5.471,15.623-2.17,96.2,9.033,103.369a10.3,10.3,0,0,1,5.33,5.83,10.287,10.287,0,0,1-.375,7.889A10.342,10.342,0,0,1,18662.021-2819.25Z" transform="translate(-5168.038 1391.441)" fill="url(#radial-gradient22)"></path>
//                                 </g>
//                             </svg>
//                         </span>
//                         <h1 className='text-6xl sm:text-6xl font-semibold relative z-10'>For Creatives With A <br />
//                             Penchant for Vibrancy</h1>
//                     </div>
//                     <div className={`hidden lg:block col-span-4`}>
//                         <img src="/image/portfoilo/banner-right.png" alt="Error" />
//                     </div>
//                 </div>
//             </div>
//             <div className={`custom_container`}>
//                 <OurPortfoilio />
//             </div>
//             {/* <div className={`custom_container mt-12`}>
//                 <ProfessionalSolutions />
//             </div>
//             <div className={`custom_container mt-12`}>
//                 <div className={`grid lg:grid-cols-12 gap-6`}>
//                     <div className={`lg:col-span-4`}>
//                         <div className="space-y-6 relative">
//                             <span className='absolute z-0 -top-16'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="342.316" height="190.607" viewBox="0 0 342.316 190.607">
//                                     <defs>
//                                         <radialGradient id="radial-gradient33" cx="0.515" cy="0.501" r="1.096" gradientTransform="matrix(0.5, -0.866, 0.376, 0.217, 0.069, 0.839)" gradientUnits="objectBoundingBox">
//                                             <stop offset="0" stop-color="#ffde8b"></stop>
//                                             <stop offset="1" stop-color="#fbfaf5"></stop>
//                                         </radialGradient>
//                                     </defs>
//                                     <path id="Path_220" data-name="Path 220" d="M104.589,110.29c-33.311,0-62.955-4.856-82.275-16.931C6.107,83.23-1.146,72.6.146,60.848,4.022,25.566,93.855,2.59,104.089.087c1.986-.486,3.914,1.122,4.3,3.591s-.9,4.866-2.888,5.352C68.847,18.006,9.8,40.346,7.409,62.082c-1,9.1,9.345,17.6,18.2,23.134,18.089,11.306,46.54,15.859,78.719,15.861,84.695.005,195.331-31.521,211.7-54.426,2.017-2.822,1.432-3.923,1.152-4.451-12-22.6-109.612-17.874-172.292-9.183-2.012.279-3.826-1.522-4.05-4.024s1.225-4.756,3.237-5.035C160.492,21.681,304.994,2.709,323.3,37.178c1.482,2.791,3.22,8.52-1.79,15.528C304.177,76.956,191.839,110.282,104.589,110.29Z" transform="matrix(0.966, -0.259, 0.259, 0.966, 0, 84.075)" fill="url(#radial-gradient33)"></path>
//                                 </svg>
//                             </span>
//                             <h2 className='font-semibold text-5xl z-10 relative'>Launch Your<br />
//                                 Online Store</h2>
//                             <p className='z-10 relative'>Full WooCommerce compatibility and a great selection of captivating shop page layouts.</p>
//                             <button
//                                 className="border border-black rounded-full font-semibold px-6 py-2 w-fit duration-100 ease-in-out cursor-pointer hover:bg-[#ffde8b] uppercase hover:text-white flex items-center gap-2"
//                                 onMouseEnter={() => setIsHovered(true)}
//                                 onMouseLeave={() => setIsHovered(false)}
//                             >
//                                 {isHovered ? <GoDot className="text-white" /> : <GoDotFill className="text-[#ffde8b]" />}
//                                 explore
//                             </button>
//                         </div>
//                     </div>
//                     <div className={`lg:col-span-8`}>
//                         <img src="/image/portfoilo/protleft1.png" alt="" />
//                     </div>
//                 </div>
//             </div>
//             <div className={`custom_container mt-12`}>
//                 <div className={`grid lg:grid-cols-12 gap-6`}>
//                     <div className={`lg:col-span-8`}>
//                         <img src="/image/portfoilo/portright.png" alt="" />
//                     </div>
//                     <div className={`lg:col-span-4`}>
//                         <div className="space-y-6 relative">
//                             <span className='absolute z-0 -top-16 lg:-left-20'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="137.298" height="135.187" viewBox="0 0 137.298 135.187">
//                                     <defs>
//                                         <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.521" gradientTransform="matrix(-0.242, -0.97, 1.147, -0.287, 0.047, 1.128)" gradientUnits="objectBoundingBox">
//                                             <stop offset="0" stop-color="#ffde8b"></stop>
//                                             <stop offset="1" stop-color="#f0ead8" stop-opacity="0.369"></stop>
//                                             <stop offset="1" stop-color="#ecece4" stop-opacity="0"></stop>
//                                         </radialGradient>
//                                     </defs>
//                                     <g id="Group_683" data-name="Group 683" transform="translate(9064.631 -10067.445) rotate(138)">
//                                         <path id="Path_120" data-name="Path 120" d="M18633.041-2860.222a7.992,7.992,0,0,1-2.783-.5,7.989,7.989,0,0,1-4.709-10.264c.91-2.46,22.9-60.494,73.01-81.655a7.99,7.99,0,0,1,6.117-.042,7.987,7.987,0,0,1,4.352,4.3,7.993,7.993,0,0,1-4.25,10.47c-43.664,18.435-64.043,71.953-64.246,72.491A8,8,0,0,1,18633.041-2860.222Z" transform="translate(-5192.701 1394.999)" fill="url(#radial-gradient)"></path>
//                                         <path id="Path_121" data-name="Path 121" d="M18713.535-2869.521a7.984,7.984,0,0,1-6.576-3.443c-6.264-9.044-57-43.62-87.5-63.288a8,8,0,0,1-2.383-11.047,7.987,7.987,0,0,1,11.043-2.386c13.621,8.783,82.076,53.317,91.977,67.623a7.988,7.988,0,0,1-2.02,11.119A7.954,7.954,0,0,1,18713.535-2869.521Z" transform="translate(-5204.566 1397.967)" fill="url(#radial-gradient)"></path>
//                                         <path id="Path_122" data-name="Path 122" d="M18633.055-2916.8a7.985,7.985,0,0,1-7.918-7.007,8,8,0,0,1,6.941-8.915c17.34-2.148,74.863-8.91,87.232-5.594a7.988,7.988,0,0,1,5.658,9.784,7.99,7.99,0,0,1-9.779,5.654c-6.391-1.706-47.094,1.794-81.141,6.017a7.968,7.968,0,0,1-.994.062Z" transform="translate(-5209.328 1413.045)" fill="url(#radial-gradient)"></path>
//                                         <path id="Path_123" data-name="Path 123" d="M18655.762-2850.322a8.019,8.019,0,0,1-3.4-.755c-23.289-10.869-18.277-90.955-15.242-99.62a7.99,7.99,0,0,1,10.184-4.9,7.993,7.993,0,0,1,4.9,10.183c-4.229,12.075-1.678,74.353,6.982,79.89a7.951,7.951,0,0,1,4.117,4.506,7.948,7.948,0,0,1-.289,6.1A7.993,7.993,0,0,1,18655.762-2850.322Z" transform="translate(-5180.576 1391.441)" fill="url(#radial-gradient)"></path>
//                                     </g>
//                                 </svg>
//                             </span>
//                             <h2 className='font-semibold text-5xl z-10 relative'>Start a Modern<br />
//                                 Blog in No Time</h2>
//                             <p className='z-10 relative'>Blog about your favorite topics using Randall’s neat blog lists & single post templates.</p>
//                             <button
//                                 className="border border-black rounded-full font-semibold px-6 py-2 w-fit duration-100 ease-in-out cursor-pointer hover:bg-[#ffde8b] uppercase hover:text-white flex items-center gap-2"
//                                 onMouseEnter={() => setIsHovered(true)}
//                                 onMouseLeave={() => setIsHovered(false)}
//                             >
//                                 {isHovered ? <GoDot className="text-white" /> : <GoDotFill className="text-[#ffde8b]" />}
//                                 explore
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={`mt-12`}>
//                 <ReadymadePages />
//             </div> */}
//         </>
//     )
// }
