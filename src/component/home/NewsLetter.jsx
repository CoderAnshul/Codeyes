import React from 'react';

export default function NewsLetter() {

  return (
    <div className={`pt-20 sm:pt-32 pb-10`}>
      <div className="space-y-2 grid justify-center">
        <div className='m-auto relative'>
          <img
            src="/image/home/hello.webp"
            alt="Error1"
            className='absolute bottom-[100px] sm:bottom-[70px] left-2 sm:-left-10 md:left-[-102px] w-[80px] animate_zoom_in delay-500'
          />
          <img
            src="/image/about/yup.png"
            alt="Error1"
            className='absolute w-[50px] top-[100px] z-10 sm:top-[20px] right-2 sm:-right-10 md:-right-32 animate_zoom_in delay-1000'
          />
          <h2 className="text-5xl sm:text-[52px] font-semibold text-center z-10 relative">Solutions for Online Success</h2>
          {/* <p className='text-center px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p> */}
        </div>
      </div>
    </div>
  );
}
