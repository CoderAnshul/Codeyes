import React, { useState, useEffect } from 'react';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1111);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (section) => {
        if (section !== activeSection) {
            setActiveSection(section);
        }
    };

    const sections = [
        { id: 1, bg: 'bg-[#cbdec6]', title: 'Branding', subtitle: 'Branding', content: 'Crafting a unique identity that resonates and sets your brand apart.' },
        { id: 2, bg: 'bg-[#f0ead8]', title: 'Visual Design', subtitle: 'Visual Design', content: 'Creating compelling visuals that capture attention and communicate your message.' },
        { id: 3, bg: 'bg-[#d2ebf8]', title: 'Lead Generation', subtitle: 'Lead Generation', content: 'Driving qualified leads to fuel your business growth.' },
        { id: 4, bg: 'bg-[#ffde8b]', title: 'E-commerce Marketing', subtitle: 'E-com Marketing', content: 'Boosting online sales through targeted, data-driven strategies.' },
    ];

    if (isMobile) {
        return (
            <div className="flex flex-col min-h-full border border-black rounded-3xl overflow-hidden">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`
                            ${section.bg}
                            p-6 relative border-b border-black transition-all duration-500 ease-in-out
                            ${activeSection === section.id ? 'h-auto py-8' : 'h-24 cursor-pointer'}
                        `}
                        onClick={() => handleClick(section.id)}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-6xl lg:!text-[75px] font-black"
                                style={{
                                    WebkitTextStroke: '1px black',
                                    color: 'transparent',
                                }}>{section.id.toString().padStart(2, '0')}</h1>
                            <h2 className="uppercase text-3xl sm:text-4xl md:text-6xl lg:!text-[75px] font-black mask-from-right hidden sm:block"
                                style={{
                                    WebkitTextStroke: '1px black',
                                    color: 'transparent',
                                }}>{section.title}</h2>
                        </div>
                        {activeSection === section.id && (
                            <div className="mt-16 fade-in-animation">
                                {/* <p className="mb-0">({section.subtitle})</p> */}
                                <h3 className="text-black text-4xl sm:text-5xl font-bold mt-1 mask-from-left w-full sm:w-[60%] whitespace-break-spaces">{section.content}</h3>
                                <div className="mt-5 h-[200px] sm:h-[300px]">
                                    <img
                                        src={`/image/about/horizontal-gallery-img${section.id}.jpg`}
                                        alt={`Section ${section.id}`}
                                        className="w-full rounded-3xl scale-in-animation h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex h-full overflow-hidden border border-black rounded-3xl">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className={`
                        ${section.bg}
                        section-slide
                        ${activeSection === section.id ? 'active' : ''}
                        p-6 relative border-l ${activeSection !== section.id ? 'cursor-pointer' : ''} border-black transition-all duration-500 ease-in-out overflow-hidden
                    `}
                    onClick={() => activeSection !== section.id && handleClick(section.id)}
                >
                    <div className="flex items-center flex-nowrap justify-between gap-10">
                        <h1 className="uppercase text-3xl sm:text-4xl md:text-6xl lg:!text-[75px] font-black"
                            style={{
                                WebkitTextStroke: '1px black',
                                color: 'transparent',
                            }}>{section.id.toString().padStart(2, '0')}</h1>

                        {activeSection === section.id ? (
                            <h2 className="uppercase text-3xl sm:text-4xl md:text-6xl lg:!text-[75px] font-black mask-from-right"
                                style={{
                                    WebkitTextStroke: '1px black',
                                    color: 'transparent',
                                }}>{section.title}</h2>
                        ) : (
                            <h2 className="mt-20 absolute top-[200px] left-[0px] font-semibold text-4xl rotate-[270deg] whitespace-nowrap text-black mask-from-bottom">
                                {section.subtitle}
                            </h2>
                        )}
                    </div>
                    {activeSection === section.id ? (
                        <div className="pt-36 fade-in-animation">
                            {/* <p className="mb-0">({section.subtitle})</p> */}
                            <h3 className="text-black text-4xl font-bold mt-1 mask-from-left h-[120px]">{section.content}</h3>
                            <div className="mt-5 ">
                                <img
                                    src={`/image/about/horizontal-gallery-img${section.id}.jpg`}
                                    alt={`Section ${section.id}`}
                                    className="w-full rounded-3xl scale-in-animation"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="mt-20 h-[300px] absolute bottom-10 mr-6">
                            <img
                                src={`/image/about/horizontal-gallery-img${section.id}.jpg`}
                                alt={`Section ${section.id}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}