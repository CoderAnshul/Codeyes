import React from 'react'
import Banner from '../../component/home/Banner'
import Clients from '../../component/home/Clients'
import AboutUs from '../../component/home/AboutUs'
import ProfessionalSolutions from '../../component/home/ProfessionalSolutions'
import FiveColumns from '../../component/home/FiveColumns'
// import ReadymadePages from '../../component/home/ReadymadePages'
import { Testimonials } from '../../component/home/Testimonials'
import News from '../../component/home/News'
import FooterTop from '../../component/layout/FooterTop'
import Clients2 from '../../component/home/Clients2'
import Portfolio from '../../component/home/Portfolio'
import NewsLetter from '../../component/home/NewsLetter'
import VideoTestimonial from '../../component/home/VideoTestimonial'
// import Accordion from '../../component/home/Accordion'

export default function Home() {
    return (
        <>
            <Banner />
            {/* <Accordion /> */}
            <div className={``}>
                <Clients />
                <Clients2 />
            </div>
            <div className={`custom_global_space`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <AboutUs />
            </div>
            <div className={`custom_global_space`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <NewsLetter />
            </div>
            <div className={``}>
                <Portfolio />
            </div>
            <div className={`custom_global_space`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <FiveColumns />
            </div>
            <div className={`pt-28`}>
                <ProfessionalSolutions />
            </div>
            {/* <div className={`mt-24`}>
                <ReadymadePages />
            </div> */}
            <div className={`pt-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <Testimonials />
            </div>
            <div className={`!pb-14 sm:!pb-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <VideoTestimonial />
            </div>
            
            <div className={``} >
                <News />
            </div>
            <div className={`custom_global_space`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <FooterTop />
            </div>
        </>
    )
}
