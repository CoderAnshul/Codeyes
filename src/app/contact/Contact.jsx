import React, { useState } from 'react';
import ContactForm from '../../component/pages/contact/ContactForm';
import { GoogleMap, Marker, LoadScript, InfoWindow } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from '../../utils/config';

const mapContainerStyle = {
    width: "100%",
    height: "700px",
  };

export default function Contact() {
    const [mapCenter, setMapCenter] = useState({
        lat: 21.1702,
        lng: 72.8311,
    });
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
  const [infoWindowPosition, setInfoWindowPosition] = useState(mapCenter);
    const [selectedAddress, setSelectedAddress] = useState({
        country: 'India',
        city: 'Surat, Gujarat, India',
        email: 'randal@example.com',
        phone: '+1123456788',
    });

    const handleMarkerClick = (position) => {
        setInfoWindowPosition(position);
        setInfoWindowVisible(true);
      };
      const handleInfoWindowClose = () => {
        setInfoWindowVisible(false);
      };

    const handleLocationClick = (location, address) => {
        setMapCenter(location);
        setSelectedAddress(address);
    };

    return (
        <> 
            <div className={`custom_container sm:!py-10`}>
                <div className={`grid lg:grid-cols-12 gap-10`}>
                    <div className={`col-span-6 content-end pb-8 max-lg:order-1 xl:mr-32`}>
                    <div className='space-y-4 mb-20 lg:pr-10'>
                            <div className='relative'>
                                <h1 className='text-[50px] sm:text-[64px] sm:leading-[70px] font-semibold relative z-10'>
                                    Let’s talk about your goals
                                </h1>

                                <span className={`absolute hidden lg:block z-0 right-10 md:right-40 lg:right-10 bottom-36`}>
                                    <img src="/image/home/happy.png" alt="Error" />
                                </span>
                            </div> 
                            <p>You tell us where you want to go. We’ll help you build the roadmap.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="col-span-1 cursor-pointer" onClick={() => handleLocationClick({ lat: 28.6203, lng: 77.3794 }, { country: 'India', city: 'Surat, Gujarat, India', email: 'info@codeyesmedia.com', phone: '+91 8849723987' })}>
                                <div className="space-y-3">
                                    <h4 className='text-2xl font-semibold'>India</h4>
                                    <p>213, Skyview Business Horizon, nr. Shyamdham Temple, Sarthana Jakat Naka, Surat, Gujarat 395006</p>
                                    <p>info@codeyesmedia.com</p>
                                    <p>+91 88497 23987</p>
                                </div>
                            </div>
                            <div className="col-span-1 cursor-pointer" onClick={() => handleLocationClick({ lat: 34.0489, lng: 111.0937 }, { country: 'USA', city: 'Arizona, USA', email: 'info@codeyesmedia.com', phone: '+91 8849723987' })}>
                                <div className="space-y-3">
                                    <h4 className='text-2xl font-semibold'>USA</h4>
                                    <p>2055 E Warner Rd, Tempe, AZ 85281, USA</p>
                                    <p>info@codeyesmedia.com</p>
                                    <p>+1 4806485948</p>
                                </div>
                            </div>
                            <div className="col-span-1 cursor-pointer" onClick={() => handleLocationClick({ lat: 51.8959, lng: 0.8919 }, { country: 'UK', city: 'Colchester, Essex, UK', email: 'info@codeyesmedia.com', phone: '+91 8849723987' })}>
                                <div className="space-y-3">
                                    <h4 className='text-2xl font-semibold'>UK</h4>
                                    <p>6-8 Dudley Street, Luton, England</p>
                                    <p>info@codeyesmedia.com</p>
                                    <p>+44 07880205836</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-6 rounded-[50px] overflow-hidden`}>
                        {/* <img src="/image/portfoilo/contact.jpg" alt="Error" className='h-full' /> */}
                        <div className="w-full lg:col-span-1">
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={14}>
              <Marker position={mapCenter} onClick={() => handleMarkerClick(mapCenter)} />

              {infoWindowVisible && (
                <InfoWindow position={infoWindowPosition} onCloseClick={handleInfoWindowClose}>
                  <div className="flex items-center">
                    <p>{selectedAddress?.city || "No address provided"}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
                        
                    </div>
                </div>
            </div>
            <div className="custom_container mb-10">
                <ContactForm  />
            </div>
        </>
    );
}
