// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function PortfolioDesign() {
//     const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//     const [tooltipAlignment, setTooltipAlignment] = useState({ x: 'left', y: 'top' });

//     const handleMouseMove = (e, container) => {
//         const rect = container.getBoundingClientRect();
//         const tooltipWidth = 300;
//         const tooltipHeight = 60;

//         let xPos = e.clientX - rect.left;
//         let yPos = e.clientY - rect.top;

//         let xAlign = 'left';
//         let yAlign = 'top';

//         if (xPos + tooltipWidth > rect.width) {
//             xAlign = 'right';
//             xPos = rect.width - tooltipWidth;
//         }

//         if (yPos + tooltipHeight > rect.height) {
//             yAlign = 'bottom';
//             yPos = rect.height - tooltipHeight;
//         }

//         setTooltipPosition({ x: xPos, y: yPos });
//         setTooltipAlignment({ x: xAlign, y: yAlign });
//     };

//     return (
//         <>
//             <div className="grid grid-cols-2 my-10">
//                 <div className="col-span-2 lg:col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                     onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                     <Link to={`/portfolio-slug/1`}>
//                         <img
//                             src="/image/portfoilo/img/port-img20.jpg"
//                             alt="Error1"
//                             className="h-full w-full object-cover"
//                         />
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                         >
//                             Art
//                         </div>
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 80 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                         >
//                             Visual Concept
//                         </div>
//                     </Link>
//                     {/* <svg class="qodef-svg-distort-filter" width="100%" height="100%" ><filter id="qodef-svg-distort-0" x="-25%" y="-25%" width="150%" height="150%"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.01" numOctaves="2" seed="2" result="warp"></feTurbulence><feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp"></feDisplacementMap></filter></svg> */}
//                 </div>
//                 <div className="col-span-2 lg:col-span-1">
//                     <div className="grid sm:grid-cols-2">
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/2`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list3-img2.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/3`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list3-img3.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/4`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list2-img2.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/5`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list3-img4.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-span-2 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                     onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                     <Link to={`/portfolio-slug/6`}>
//                         <img
//                             src="/image/portfoilo/img/port-gallery-img1.jpg"
//                             alt="Error1"
//                             className="h-full w-full object-cover"
//                         />
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                         >
//                             Art
//                         </div>
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                         >
//                             Visual Concept
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="col-span-2 lg:col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                     onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                     <Link to={`/portfolio-slug/7`}>
//                         <img
//                             src="/image/portfoilo/img/port-list3-img6.jpg"
//                             alt="Error1"
//                             className="h-full w-full object-cover"
//                         />
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                         >
//                             Art
//                         </div>
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                         >
//                             Visual Concept
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="col-span-2 lg:col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                     onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                     <Link to={`/portfolio-slug/8`}>
//                         <img
//                             src="/image/portfoilo/img/port-list3-img7.jpg"
//                             alt="Error1"
//                             className="h-full w-full object-cover"
//                         />
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                         >
//                             Art
//                         </div>
//                         <div
//                             style={{
//                                 top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                 bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                 left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                 right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                             }}
//                             className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                         >
//                             Visual Concept
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="col-span-2">
//                     <div className='grid sm:grid-cols-2 lg:grid-cols-4'>
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/9`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list3-img8.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/10`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list2-img3.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/11`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list3-img9.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="col-span-1 border border-black relative cursor-pointer group rounded-[40px] overflow-hidden port_img"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
//                             <Link to={`/portfolio-slug/12`}>
//                                 <img
//                                     src="/image/portfoilo/img/port-list2-img1.jpg"
//                                     alt="Error1"
//                                     className="h-full w-full object-cover"
//                                 />
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                                 >
//                                     Art
//                                 </div>
//                                 <div
//                                     style={{
//                                         top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                         bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                         left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                         right: tooltipAlignment.x === 'right' ? '50px' : 'auto',
//                                     }}
//                                     className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                                 >
//                                     Visual Concept
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }








































// csss

// #root {
//   overflow-x: hidden;
// }

// body {
//   overflow-x: hidden;
//   width: 100% !important;
//   background-color: #fbfaf5;
// }

// .marquee-container {
//   width: 100%;
//   overflow: hidden;
//   position: relative;
// }

// .marquee-content {
//   display: flex;
//   white-space: nowrap;
//   width: 270%;
//   height: 600px;
//   animation: marquee 16s linear infinite;
// }

// .marquee-content img {
//   height: 100% !important;
//   width: 100%;
//   /* object-fit: cover; */
// }

// @keyframes marquee {
//   0% {
//     transform: translateX(0);
//   }

//   100% {
//     transform: translateX(-100%);
//   }
// }

// .slick-dots li button {
//   width: 13px !important;
//   height: 13px !important;
//   padding: 0 !important;
// }

// .slick-dots {
//   button {
//     border: 1px solid black !important;
//     border-radius: 50%;
//   }
// }

// .slick-dots li button:before {
//   height: 13px !important;
//   width: 13px !important;
//   opacity: 0 !important;
//   border-radius: 50% !important;
// }

// .slick-dots li.slick-active button:before {
//   background-color: #ffde8b !important;
//   opacity: 1 !important;
//   color: #ffde8b !important;
//   border: 1px solid black;
// }

// .parallax {
//   background-image: url(../../public/image/about/p2-parallax-img.jpg);
//   background-attachment: fixed;
//   background-position: center;
//   height: 600px;
//   background-size: cover;
//   background-repeat: no-repeat;
// }

// .sticky-header {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background-color: #fbfaf5;
//   border-bottom: 2px solid #fff;
//   z-index: 100;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// @media screen and (max-width: 680px) {
//   .parallax {
//     height: 400px !important;
//   }
// }

// @media screen and (max-width: 1024px) {
//   .marquee-content {
//     height: 100%;
//   }
// }

// @media screen and (max-width: 640px) {
//   .marquee-content {
//     width: 400%;
//   }
// }

// .slick-slide img {
//   margin: auto;
// }


// /* .text-container {
//   width: 100%;
//   height: 100%;
// }

// .scroll-text {
//   display: inline-block;
//   white-space: nowrap;
// }

// button:hover .text-container {
//   animation: scroll-horizontal 2s linear infinite;
// }

// @keyframes scroll-horizontal {
//   0% {
//     transform: translateX(100%);
//   }

//   100% {
//     transform: translateX(-100%);
//   }
// } */


// /* .scroll-container {
//   overflow: hidden;
//   white-space: nowrap;
//   position: relative;
//   width: 100%;
// }

// .scroll-text-wrapper {
//   display: flex;
//   align-items: center;
//   will-change: transform;
//   animation: scroll 10s linear infinite;
// }

// .scroll-text {
//   display: inline-block;
//   padding-right: 2rem;
// }

// @keyframes scroll {
//   from {
//     transform: translateX(100%);
//   }

//   to {
//     transform: translateX(-100%);
//   }
// } */

// .scroll-container:hover .scroll-text-wrapper {
//   animation-play-state: running;
// }


// .qodef-menu-item-brush {
//   -webkit-mask-position: 0 0;
//   -webkit-clip-path: inset(0 0 0 0);
//   clip-path: inset(0 0 0 0);
//   transition-duration: .9s, .2s;
//   z-index: -1;
//   --qode-brush-color: #ffde8b;
//   -webkit-mask-image: radial-gradient(circle at 66px 26px, transparent 27%, #000 90%);
//   -webkit-mask-repeat: no-repeat;
//   /* -webkit-mask-position: -75px 0; */
//   fill: #ffde8b;
// }

// .hover_img1,
// .hover_img2,
// .hover_img3,
// .hover_img4,
// .hover_img5,
// .hover_img6 {
//   position: absolute;
//   display: none;
//   left: -15px;
//   bottom: -15px;
// }

// .nav_link1 a,
// .nav_link2 a,
// .nav_link3 a,
// .nav_link4 a,
// .nav_link5 a,
// .nav_link6 a {
//   z-index: 10;
//   position: relative;
// }

// .nav_link1,
// .nav_link2,
// .nav_link3,
// .nav_link4,
// .nav_link5,
// .nav_link6 {
//   position: relative;
//   z-index: 10;

// }

// .nav_link1:hover .hover_img1,
// .nav_link2:hover .hover_img2,
// .nav_link3:hover .hover_img3,
// .nav_link4:hover .hover_img4,
// .nav_link5:hover .hover_img5,
// .nav_link6:hover .hover_img6 {
//   display: block !important;
// }

// /* .sliding-text-wrapper {
//   display: flex;
//   animation: slide 1s linear infinite;
//   width: 300%;
// }

// .sliding-text {
//   white-space: nowrap;
// }

// @keyframes slide {
//   0% {
//     transform: translateX(0%);
//   }

//   100% {
//     transform: translateX(-33.33%);
//   }
// } */
// .sliding-text-wrapper {
//   display: flex;
//   width: 300%;
//   transform: translateX(0%);
//   transition: transform 0.3s ease-in-out;
// }

// button:hover .sliding-text-wrapper {
//   animation: slide 1s linear infinite;
// }

// @keyframes slide {
//   0% {
//     transform: translateX(0%);
//   }

//   100% {
//     transform: translateX(-33.33%);
//   }
// }

// .port_active {
//   position: absolute;
//   top: 0;
// }

// [type='text']:focus,
// [type='email']:focus,
// [type='url']:focus,
// [type='password']:focus,
// [type='number']:focus,
// [type='date']:focus,
// [type='datetime-local']:focus,
// [type='month']:focus,
// [type='search']:focus,
// [type='tel']:focus,
// [type='time']:focus,
// [type='week']:focus,
// [multiple]:focus,
// textarea:focus,
// select:focus {
//   border: 0 !important;
//   --tw-ring-color: rgb(0 0 0 / var(--tw-border-opacity))
// }



// .dot-grid {
//   display: grid;
//   grid-template-columns: repeat(2, 10px);
//   grid-template-rows: repeat(2, 10px);
//   gap: 6px;
//   position: relative;
// }

// .dot {
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background-color: black;
//   position: relative;
//   transition: transform 0.3s ease;
// }

// .empty-dot {
//   border: 2px solid black;
//   background-color: transparent;
// }

// .move-to-second {
//   transform: translate(16px, 0);
// }

// .move-to-first {
//   transform: translate(0px, -16px);
// }

// .move-to-third {
//   transform: translate(-16px, 16px) !important;
// }

// .social_icon {
//   padding: 5px;
//   font-size: 18px;
//   border-radius: 5px;
//   border: 1px solid transparent;
//   cursor: pointer;
// }

// .social_icon:hover {
//   border: 1px solid black;
//   background-color: #ffde8b;
// }

// .rotate-btn {
//   transition: transform 0.5s ease-in-out;
// }

// .rotate-btn:hover {
//   transform: rotate(360deg);
// }

// .custom_tool_tip:before {
//   content: '';
//   position: absolute;
//   right: 10px;
//   bottom: -9px;
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 11px 1px 0 20px;
//   border-color: #fff transparent transparent transparent;
//   transform: rotate(0);
//   z-index: 100;
// }

// .custom_tool_tip:after {
//   content: '';
//   position: absolute;
//   right: 10px;
//   bottom: -10px;
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 10px 0 0 20px;
//   border-color: #000 transparent transparent transparent;
//   transform: rotate(0);
// }


// .client_2 .slick-slide {
//   position: relative;
//   left: -120px;
// }

// /* @media screen and (max-width: 1600px) {
// }

// @media screen and (max-width: 640px) {
//   .client_2 .slick-slide {
//     width: 210px !important;
//     position: relative;
//     left: -75px;
//   }
// } */































// /* video banner */

// .swiper-pagination-bullet {
//   width: 194px !important;
//   height: 100% !important;
//   opacity: 1 !important;
// }

// @media screen and (max-width: 1160px) {
//   .swiper-pagination-bullet {
//     width: 174px !important;
//   }
// }

// @media screen and (max-width: 1800px) {
//   .swiper-pagination-bullet {
//     width: 164px !important;
//   }
// }

// @media screen and (max-width: 1180px) {
//   .video_title {
//     font-size: 30px !important;
//   }
// }

// @media screen and (max-width: 1024px) {
//   .swiper-pagination-bullet {
//     visibility: hidden;
//   }

//   .video_info {
//     width: 100% !important;
//   }

//   .video_title {
//     font-size: 45px !important;
//   }
// }

// @media screen and (max-width: 680px) {
//   .video_info {
//     width: 90% !important;
//     white-space: break-spaces !important;
//     bottom: 160px !important;
//   }

//   .video_info.Visual {
//     bottom: 135px !important;
//   }

//   .swiper-pagination {
//     padding: 75px 3.3% !important;
//   }
// }

// @media screen and (max-width: 500px) {
//   .video_info {
//     /* width: 90% !important; */
//     bottom: 135px !important;
//   }

//   .video_title {
//     font-size: 35px !important;
//   }

//   .video_info.Visual {
//     bottom: 115px !important;
//   }

//   .swiper-pagination {
//     padding: 60px 3.3% !important;
//   }
// }

// .swiper-pagination-bullet img {
//   border-radius: 10px;
//   border: 1px solid #151015;
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
// }

// .video_container {
//   border-radius: 40px;
//   height: 500px;
//   overflow: hidden;
//   position: relative;
// }

// .video_container video {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .swiper-pagination {
//   border: 1px solid #000;
//   border-radius: 40px;
//   background-color: #d2ebf8;
//   padding: 50px 3.3%;
//   display: flex;
//   align-items: center;
//   justify-content: end;
//   bottom: 90px !important;
//   position: relative !important;
// }

// .video_info {
//   position: absolute;
//   bottom: 150px;
//   left: 20px;
//   white-space: nowrap;
//   padding: 10px;
//   z-index: 20;
//   border-radius: 5px;
//   overflow: hidden;
//   width: 37%;
// }

// .video_title {
//   font-size: 40px;
//   line-height: 40px;
//   font-weight: 600;
//   transform: translateX(-100%);
//   animation: slideInFromLeft 1.5s ease forwards;
// }

// .video_subtitle {
//   font-size: 15px;
//   text-transform: uppercase;
//   font-weight: 400;
//   transform: translateX(-100%);
//   animation: slideInFromLeft 1.5s ease forwards 0.3s;
// }

// @keyframes slideInFromLeft {
//   0% {
//     transform: translateX(-100%);
//     opacity: 0;
//   }

//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// .swiper-thumbnail {
//   width: 100px;
//   height: 60px;
//   object-fit: cover;
// }

// .custom_img_pagination {
//   border-radius: 4px;
// }

// /* Base bullet style */
// .swiper-pagination-bullet {
//   position: relative;
// }

// .swiper-pagination-bullet::after {
//   content: '';
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%) scale(0);
//   z-index: 10;
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   background-image: url('../../public/image/play_icon.png');
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0;
//   transition: transform 0.3s ease, opacity 0.3s ease;
// }

// .swiper-pagination-bullet-active::after {
//   transform: translate(-50%, -50%) scale(1);
//   opacity: 1;
// }

// .swiper-pagination-bullet:hover::after {
//   transform: translate(-50%, -50%) scale(1);
//   opacity: 1;

// }













// /* @keyframes expand {
//   0% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(1.05);
//   }

//   100% {
//     transform: scale(1);
//   }
// }

// @keyframes shrink {
//   0% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(0.95);
//   }

//   100% {
//     transform: scale(1);
//   }
// }

// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes scaleIn {
//   from {
//     transform: scale(0.8);
//     opacity: 0;
//   }

//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// }

// .expand-animation {
//   animation: expand 0.5s ease-out;
// }

// .shrink-animation {
//   animation: shrink 0.5s ease-out;
// }

// .fade-in-animation {
//   animation: fadeIn 0.5s ease-out;
// }

// .scale-in-animation {
//   animation: scaleIn 0.5s ease-out;
// }

// .section-slide {
//   transition: all 0.5s ease-in-out;
//   width: calc(100% / 6);
// }

// .section-slide.active {
//   width: calc(100% / 2);
// }

// @media (max-width: 1024px) {
//   .section-slide {
//     width: calc(100% / 4);
//   }

//   .section-slide.active {
//     width: calc(100% / 2);
//   }
// }

// @media (max-width: 768px) {
//   .section-slide {
//     width: calc(100% / 2);
//   }

//   .section-slide.active {
//     width: 100%;
//   }
// }

// @media (max-width: 640px) {
//   .section-slide {
//     width: 100%;
//   }
// } */
// /*
// @keyframes expand {

//   0%,
//   100% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(1.05);
//   }
// }

// @keyframes shrink {

//   0%,
//   100% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(0.95);
//   }
// }

// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes scaleIn {
//   from {
//     transform: scale(0.8);
//     opacity: 0;
//   }

//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// }

// @keyframes maskFromLeft {
//   from {
//     clip-path: inset(0 100% 0 0);
//   }

//   to {
//     clip-path: inset(0 0 0 0);
//   }
// }

// @keyframes maskFromRight {
//   from {
//     clip-path: inset(0 0 0 100%);
//   }

//   to {
//     clip-path: inset(0 0 0 0);
//   }
// }

// @keyframes maskFromBottom {
//   from {
//     clip-path: inset(0 100% 0 0);
//   }

//   to {
//     clip-path: inset(0 0 0 0);
//   }
// }

// .expand-animation {
//   animation: expand 0.5s ease-out;
// }

// .shrink-animation {
//   animation: shrink 0.5s ease-out;
// }

// .fade-in-animation {
//   animation: fadeIn 0.5s ease-out;
// }

// .scale-in-animation {
//   animation: scaleIn 0.5s ease-out;
// }

// .mask-from-left {
//   animation: maskFromLeft 0.5s ease-out forwards;
// }

// .mask-from-right {
//   animation: maskFromRight 0.5s ease-out forwards;
// }

// .mask-from-bottom {
//   animation: maskFromBottom 0.5s ease-out forwards;
// }

// .section-slide {
//   transition: all 0.5s ease-in-out;
//   width: calc(100% / 6);
// }

// .section-slide.active {
//   width: calc(100% / 2);
// }

// @media (max-width: 1024px) {
//   .section-slide {
//     width: calc(100% / 4);
//   }

//   .section-slide.active {
//     width: calc(100% / 2);
//   }
// }

// @media (max-width: 768px) {
//   .section-slide {
//     width: calc(100% / 2);
//   }

//   .section-slide.active {
//     width: 100%;
//   }
// }

// @media (max-width: 640px) {
//   .section-slide {
//     width: 100%;
//   }
// } */







// @keyframes expand {

//   0%,
//   100% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(1.05);
//   }
// }

// @keyframes shrink {

//   0%,
//   100% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(0.95);
//   }
// }

// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes scaleIn {
//   from {
//     transform: scale(0.8);
//     opacity: 0;
//   }

//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// }

// @keyframes maskFromLeft {
//   from {
//     clip-path: inset(0 100% 0 0);
//   }

//   to {
//     clip-path: inset(0 0 0 0);
//   }
// }

// @keyframes maskFromRight {
//   from {
//     clip-path: inset(0 0 0 100%);
//   }

//   to {
//     clip-path: inset(0 0 0 0);
//   }
// }

// @keyframes maskFromBottom {
//   from {
//     clip-path: inset(0 100% 0 0);
//   }

//   to {
//     clip-path: inset(0 0 0 0);
//   }
// }

// .expand-animation {
//   animation: expand 0.5s ease-out;
// }

// .shrink-animation {
//   animation: shrink 0.5s ease-out;
// }

// .fade-in-animation {
//   animation: fadeIn 0.5s ease-out;
// }

// .scale-in-animation {
//   animation: scaleIn 0.5s ease-out;
// }

// .mask-from-left {
//   animation: maskFromLeft 0.5s ease-out forwards;
// }

// .mask-from-right {
//   animation: maskFromRight 0.5s ease-out forwards;
// }

// .mask-from-bottom {
//   animation: maskFromBottom 0.5s ease-out forwards;
// }

// .section-slide {
//   transition: all 0.5s ease-in-out;
//   width: calc(100% / 6);
// }

// .section-slide.active {
//   width: calc(100% / 2);
// }

// @media (max-width: 1024px) {
//   .section-slide {
//     width: calc(100% / 4);
//   }

//   .section-slide.active {
//     width: calc(100% / 2);
//   }
// }

// @media (max-width: 768px) {
//   .section-slide {
//     width: calc(100% / 2);
//   }

//   .section-slide.active {
//     width: 100%;
//   }
// }

// @media (max-width: 640px) {
//   .section-slide {
//     width: 100%;
//   }
// }

// .animate-arrow:hover .transform {
//   transform: translateY(-5px);
// }

// .transition-transform,
// .news_card img {
//   transition: transform 0.3s ease;
// }

// .news_card {
//   cursor: pointer;
// }

// .news_card:hover img {
//   transform: scale(1.1);
// }

// .video-container {
//   position: relative;
//   width: 100%;
//   margin: 0 auto;
//   overflow: hidden;
// }

// .video {
//   width: 100%;
//   height: auto;
//   display: block;
// }

// .overlay-grid {
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   /* Adjust based on your layout */
//   grid-template-rows: repeat(3, 1fr);
//   /* Adjust based on your layout */
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
// }

// .grid-item {
//   border-radius: 30px;
//   border: 1px solid #000;
//   position: relative;
// }

// .white_background_top_left {
//   position: absolute;
//   left: 0;
//   top: -1px;
//   background: #fff;
//   height: 30px;
//   width: 30px;
// }

// .white_background_top_right {
//   position: absolute;
//   right: 0;
//   top: -1px;
//   background: #fff;
//   height: 30px;
//   width: 30px;
// }


// .video_overlay {
//   position: relative;
// }

// .video_overlay::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 50px;
//   width: 50px;
//   background-color: #fff;
// }

// .qodef-memory-cards .qodef-grid-inner {
//   height: 100vh;
//   display: grid;
//   grid-template-columns: repeat(var(--qode-columns), minmax(0, 1fr));
//   grid-template-rows: repeat(var(--qode-rows), minmax(0, 1fr));
//   row-gap: 1px;
//   column-gap: 1px;
//   padding: 1px;
// }

// .qodef-memory-cards article {
//   position: relative;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   border-radius: 30px;
//   -webkit-clip-path: inset(-1px);
//   clip-path: inset(-1px);
//   box-shadow: 0 0 0 1px var(--qode-border-color), 0 0 0 20px var(--qode-space-color);
//   display: block;
// }

// .qodef-memory-cards {
//   position: relative;
//   --qode-columns: 5;
//   --qode-rows: 3;
//   --qode-border-color: #000;
//   --qode-space-color: #F8F7F2;
// }

// .qodef-memory-cards .qodef-background-image {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// .qodef-memory-cards article .qodef-m-top-holder {
//   -webkit-clip-path: inset(0 99.9% 0 0);
//   clip-path: inset(0 99.9% 0 0);
//   opacity: .001;
//   transition: opacity .01s .35s, -webkit-clip-path .35s ease-out;
//   transition: clip-path .35s ease-out, opacity .01s .35s;
//   transition: clip-path .35s ease-out, opacity .01s .35s, -webkit-clip-path .35s ease-out;
// }

// .qodef-memory-cards article>div {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
// }

// @media only screen and (max-width: 768px) {
//   .qodef-memory-cards {
//     --qode-columns: 3;
//     --qode-rows: 5;
//   }
// }


// @keyframes zoom-in {
//   0% {
//     transform: scale(0.5);
//     opacity: 0;
//   }

//   100% {
//     transform: scale(1);
//     opacity: 1;
//   }
// }

// .animate_zoom_in {
//   animation: zoom-in 1s ease-in-out forwards;
//   opacity: 0;
// }

// .delay-500 {
//   animation-delay: 0.5s;
// }

// .delay-1000 {
//   animation-delay: 1s;
// }

// .port_img {
//   position: relative;
//   height: 380px;
//   max-height: 380px;
//   overflow: hidden;
// }

// .port_img1 {
//   height: 100% !important;
//   max-height: 100% !important;
// }

// .port_img5,
// .port_img6,
// .port_img7 {
//   height: 800px;
//   max-height: 800px;
// }


// @media screen and (max-width: 1280px) {
//   .port_img {
//     height: 280px;
//     max-height: 280px;
//   }

//   .port_img5,
//   .port_img6,
//   .port_img7 {
//     height: 600px;
//     max-height: 600px;
//   }
// }

// @media screen and (max-width: 1024px) {
//   .port_img {
//     height: 500px !important;
//     max-height: 500px !important;
//   }

//   .port_img1 {
//     height: 800px !important;
//     max-height: 800px !important;
//   }

// }

// @media screen and (max-width: 991px) {
//   .port_img {
//     height: 400px !important;
//     max-height: 400px !important;
//   }

//   .port_img1 {
//     height: 700px !important;
//     max-height: 700px !important;
//   }

// }

// @media screen and (max-width: 780px) {
//   .port_img {
//     height: 300px !important;
//     max-height: 300px !important;
//   }

//   .port_img1 {
//     height: 700px !important;
//     max-height: 700px !important;
//   }
// }

// /* @media screen and (max-width: 680px) {
//   .port_img1 {
//     height: 500px !important;
//     max-height: 500px !important;
//   }
// } */

// @media screen and (max-width: 680px) {
//   .port_img {
//     height: 350px !important;
//     max-height: 350px !important;
//   }
// }



// .img_hover_effect {
//   position: absolute;
//   display: block;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: 0.5s;

//   &:nth-child(1) {
//     transform: translatex(50%) scalex(2);
//     opacity: 0;
//     filter: blur(12px);

//     .port_img:hover & {
//       transform: translatex(0%) scalex(1);
//       opacity: 1;
//       filter: blur(0);
//     }
//   }

//   &:nth-child(2) {
//     .port_img:hover & {
//       transform: translatex(-50%) scalex(2);
//       opacity: 0;
//       filter: blur(12px);
//     }
//   }
// }


// /* Add these styles to your CSS file */

// /* .port_img {
//   position: relative;
//   overflow: hidden;
// }

// .port_img img {
//   transition: all 0.6s ease;
//   filter: none;
//   transform: scale(1.1);
// }

// .port_img svg {
//   position: absolute;
//   width: 0;
//   height: 0;
// }

// .port_img:hover .img_hover_effect {
//   animation: liquidDistortion 1s ease-in-out forwards;
// }

// @keyframes liquidDistortion {
//   0% {
//     filter: url(#liquidDistortionEnd);
//   }

//   50% {
//     filter: url(#liquidDistortionEnd);
//   }

//   100% {
//     filter: url(#liquidDistortionEnd);
//   }
// }

// .port_img:hover .img_hover_effect {
//   filter: blur(2px) brightness(1.1);
//   filter: url(#liquidDistortionEnd);

// } */
// /* .port_img {
//   position: relative;
//   overflow: hidden;
// } */
// .port_img {
//   position: relative;
//   overflow: hidden;
//   transition: transform 0.8s ease-in-out;
// }

// .port_img img {
//   transition: transform 1.2s ease-in-out, filter 0.5s ease;
//   /* transform: scale(1.2); */
//   /* height: 300px; */
// }

// .port_img:hover img {
//   filter: url('#displacement-filter');
//   transform: scale(1.1);
// }

// .port_img:hover .svg-distort {
//   visibility: visible;
//   transition: transform 1.2s ease-in-out;
// }

// .svg-distort {
//   position: absolute;
//   width: 0;
//   height: 0;
//   visibility: hidden;
// }





// .port_img {
//   position: relative;
//   overflow: hidden;
// }
// .img_hover_effect {
//   position: absolute;
//   display: block;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: 0.5s;
// }
// .img_hover_effect:nth-child(1) {
//   transform: translatex(50%) scalex(2);
//   opacity: 0;
//   filter: blur(12px);
// }
// .port_img:hover .img_hover_effect:nth-child(1) {
//   transform: translatex(0%) scalex(1);
//   opacity: 1;
//   filter: blur(0);
//   filter: url(#displacement-filter);
// }
// .port_img:hover .img_hover_effect:nth-child(2) {
//   transform: translatex(-50%) scalex(2);
//   opacity: 0;
//   filter: blur(12px);
// }
// }