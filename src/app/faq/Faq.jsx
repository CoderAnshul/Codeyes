import React from 'react'
import FAQContent from '../../component/faq-content/content'
import Banner from '../../component/home/Banner'
import CommonBanner from '../../component/common/CommonBanner'
import FaqHeading from './FaqHeading'

export default function Faq() {
    return (
        <>
            <CommonBanner />

            <div className={`custom_container pt-10 sm:!pt-24 `}>
                <FaqHeading heading={`Website Development`} />
                <FAQContent />
            </div>
            <div className={`custom_container pt-10 sm:!py-24`}>
                <FaqHeading heading={`Digital Marketing`} />
                <FAQContent />
            </div>
        </>
    )
}
