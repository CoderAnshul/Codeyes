import React from "react";

const BrandAwards = () => {
    return (
        <>
            <div className="relative">
                <h2 className="text-[54px] font-semibold text-center">What Sets Us Apart?</h2>
                {/* <img src="/image/about/p2-offset-img1.webp" alt="Error" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                /> */}
            </div>
            <div className="mt-10 custom_container">
                <div className="grid lg:grid-cols-3 gap-14 lg:gap-20 custom_container max-lg:px-10">
                    <div className="col-span-1">
                        <div className="flex items-end gap-5">
                            <div className="w-[100px] h-[100px]">
                                <img src="/image/about/p2-icon-img2.png" alt="" className="" />
                            </div>
                            <h5 className="text-2xl font-semibold">Innovative <br/> Strategies</h5>
                        </div>
                        <div className="mt-5">
                            <p>Crafting cutting-edge strategies that set you apart and drive success in a competitive market.</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-end gap-5">
                            <div className="w-[100px] h-[100px]">
                                <img src="/image/about/p2-icon-img1.png" alt="" className="" />
                            </div>
                            <h5 className="text-2xl font-semibold">Swift <br />
                            Execution</h5>
                        </div>
                        <div className="mt-5">
                            <p>Implementing strategies efficiently and effectively to achieve results in a timely manner.</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-end gap-5">
                            <div className="w-[100px] h-[100px]">
                                <img src="/image/about/p2-icon-img3.png" alt="" className="" />
                            </div>
                            <h5 className="text-2xl font-semibold">Experienced<br />
                            Team</h5>
                        </div>
                        <div className="mt-5">
                            <p>A skilled team with diverse expertise dedicated to delivering outstanding results and guiding your growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandAwards;
