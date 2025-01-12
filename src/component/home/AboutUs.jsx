import React from 'react'

export default function AboutUs() {  
    return (
        <>
            <div className={`md:grid md:grid-cols-12 gap-4`}>
                <div className={`md:grid col-span-5 px-4 sm:px-0 relative justify-center`}>
                    <img src={`/image/about/about.png`} alt="Error" className='w-[70%] m-auto max-md:mb-10' />
                </div>
                <div className={`col-span-7 content-center max-md:order-1`}>
                <div className={`px-5 lg:px-20 space-y-5`}>
                            <h3 className={`text-3xl lg:text-[40px] font-semibold lg:leading-[50px]`}>" Define what your brand stands for, its core values and tone of voice, and then communicate consistently in those terms. "</h3>
                            <div className='space-y-3'>
                                <p> – Simon Mainwaring</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
