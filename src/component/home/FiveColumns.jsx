import React, { useState } from 'react';

export default function FiveColumns() {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipAlignment, setTooltipAlignment] = useState({ x: 'left', y: 'top' });
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1265);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1265);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e, container, index) => {
        if (isMobile) return; // Don't handle mouse move on mobile
        
        const rect = container.getBoundingClientRect();
        const tooltipWidth = 300;
        const tooltipHeight = 60;

        let xPos = e.clientX - rect.left;
        let yPos = e.clientY - rect.top;

        let xAlign = 'left';
        let yAlign = 'top';

        if (xPos + tooltipWidth > rect.width) {
            xAlign = 'right';
            xPos = rect.width - tooltipWidth;
        }

        if (yPos + tooltipHeight > rect.height) {
            yAlign = 'bottom';
            yPos = rect.height - tooltipHeight;
        }

        setTooltipPosition({ x: xPos, y: yPos });
        setTooltipAlignment({ x: xAlign, y: yAlign });
    };

    const handleInteraction = (e, container, index) => {
        if (isMobile) {
            // For mobile: toggle tooltip on click
            e.preventDefault(); // Prevent any default touch behavior
            setHoveredIndex(hoveredIndex === index ? null : index);
        } else {
            // For desktop: set on hover
            setHoveredIndex(index);
            handleMouseMove(e, container, index);
        }
    };

    const array = [
        { image: 'img1.jpg', title: 'Healthcare', description: 'Build Trust, Engage Patients' },
        { image: 'img2.jpg', title: 'Retail & E-commerce', description: 'Drive Sales, Build Loyalty' },
        { image: 'img3.jpg', title: 'Real Estate', description: 'Generate Leads, Close Deals' },
        { image: 'img4.jpg', title: 'Education & E-Learning', description: 'Expand Reach, Inspire Learners' },
        { image: 'img5.jpg', title: 'Financial Services & Banking', description: 'Build Trust, Drive Engagement' },
        { image: 'img6.jpg', title: 'Travel & Hospitality', description: 'Boost Bookings, Create Experiences' },
        { image: 'img7.jpg', title: 'Automotive', description: 'Accelerate Sales, Drive Leads' },
        { image: 'img8.jpg', title: 'Technology & IT Services', description: 'Showcase Innovation, Gain Trust' },
        { image: 'img9.jpg', title: 'Fashion & Apparel', description: 'Build a Trend, Drive Sales' },
        { image: 'img10.jpg', title: 'Food & Beverage', description: 'Create Cravings, Build Loyalty' },
        { image: 'img11.jpg', title: 'Nonprofit & Charity Organizations', description: 'Raise Awareness, Inspire Action' },
        { image: 'img12.jpg', title: 'Media & Entertainment', description: 'Engage Audiences, Boost Reach' },
        { image: 'img13.jpg', title: 'Legal Services', description: 'Build Credibility, Generate Leads' },
        { image: 'img14.jpg', title: 'Fitness & Wellness', description: 'Inspire Health, Drive Memberships' },
        { image: 'img15.jpg', title: 'Home Improvement & Interior Design', description: 'Inspire Renovations, Grow Leads' },
        { image: 'img1.jpg', title: 'Manufacturing & Industrial', description: 'Increase Visibility, Drive B2B Leads' },
    ];


    return (
        <>
            <div className="pt-10 sm:pt-20">
                <div className="space-y-2 grid justify-center">
                    <div className="m-auto relative">
                        <img src="/image/about/smile.png" alt="Error1" className="absolute -top-10 sm:top-0 left-0 sm:-left-20 md:-left-10 w-[30px] animate_zoom_in delay-500" />
                        <img src="/image/about/woohoo.png" alt="Error1" className="absolute w-[100px] md:w-[150px] -right-10 -top-14 animate_zoom_in delay-1000" />
                        <h2 className="text-4xl sm:text-[52px] sm:leading-[55px] font-semibold text-center z-10 relative">Solutions Across Key Sectors</h2>
                    </div>
                </div>
            </div>
            <div className="overflow-visible custom_global_space">
                <div className="grid grid-cols-2 border-b border-l border-r border-black sm:grid-cols-3 md:grid-cols-4">
                    {array.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-1 border-l border-t border-black p-2 sm:p-5 lg:p-10 img_box relative cursor-pointer group"
                            onClick={(e) => handleInteraction(e, e.currentTarget, index)}
                            onMouseMove={!isMobile ? (e) => handleMouseMove(e, e.currentTarget, index) : undefined}
                            onMouseEnter={!isMobile ? (e) => handleInteraction(e, e.currentTarget, index) : undefined}
                            onMouseLeave={!isMobile ? () => setHoveredIndex(null) : undefined}
                        >
                            <img
                                src={`/image/home/img/img${index + 1}.jpg`}
                                alt={`Error${index}`}
                                className="rounded-3xl"
                            />
                            {hoveredIndex === index && (
                                isMobile ? (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 w-[90%]">
                                        <div className="w-full border border-black bg-white rounded-lg shadow-lg px-3 py-2">
                                            <div className="uppercase text-sm text-center">
                                                {item.title}
                                            </div>
                                        </div>
                                        <div className="w-full border border-black bg-white rounded-lg shadow-lg px-3 py-2">
                                            <div className="text-xl font-semibold text-center">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            style={{
                                                top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
                                                bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
                                                left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                                right: tooltipAlignment.x === 'right' ? '50px' : 'auto'
                                            }}
                                            className="absolute z-20 border border-black uppercase px-3 block p-2 whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
                                        >
                                            {item.title}
                                        </div>
                                        <div
                                            style={{
                                                top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
                                                bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
                                                left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                                right: tooltipAlignment.x === 'right' ? '50px' : 'auto'
                                            }}
                                            className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black block p-2 whitespace-nowrap bg-white rounded-lg shadow-lg"
                                        >
                                            {item.description}
                                        </div>
                                    </>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}