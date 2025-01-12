import React, { useState, useEffect } from 'react';
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';  
import { useLocation } from 'react-router-dom';
import DotGrid from '../common/Dot';
import { GoDotFill } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { setShowBlogs } from '../../utils/blogSlice';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuOpen1, setIsSubmenuOpen1] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const allBlogs = useSelector((store) => store.blog.allBlogs);

  const currentPathname = location.pathname;
  const handleMouseEnter = () => {
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuOpen(false);
  };

  const handleMouseEnter1 = () => {
    setIsSubmenuOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsSubmenuOpen1(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const toggleDrawer2 = () => {
    setIsDrawerOpen2(!isDrawerOpen2);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const closeDrawer2 = () => {
    setIsDrawerOpen2(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleBlogclick=()=>{
dispatch(setShowBlogs(allBlogs));
    // navigate("/blog");
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-[#fbfaf5] transition-all duration-300 ease-in-out`}
      // className={`${isSticky ? 'sticky-header' : ''}  bg-[#fbfaf5] transition-all duration-300 ease-in-out`}
      // className={`${currentPathname === '/contact' ? 'border-b border-gray-400' : 'bg-[#f0ead8]'} ${isSticky ? 'sticky-header' : ''} transition-all duration-300 ease-in-out`}
      >
        <div className={`grid grid-cols-12 lg:gap-10 custom_container items-center !py-3`}>
          <div className={`col-span-6 lg:col-span-3`}>
            <Link to={`/`} className={``}>
              <img src="/image/logo.png" alt="Error" className='w-[120px]' />
            </Link>
          </div>
          <div className={`hidden lg:block col-span-9`}>
            <div className={`w-full flex justify-end`}>
              <div className={`flex gap-8 xl:gap-16 font-semibold items-center`}>
                <p className='cursor-pointer nav_link1'><Link to="/">HOME</Link>
                  <span className={`hover_img1 ${currentPathname === '/' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153">
                                        <path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" fill="#ffde8b" transform="rotate(4.992 1.5265 35.01869904)"></path>
                                      </svg></span>
                </p>
                
                 <div
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}>
                                  <p
                                    className="cursor-pointer nav_link2"
                                  >
                                    <Link to="/growth-advertising">GROWTH ADVERTISING
                                    </Link>
                                    <span className={`hover_img2 ${currentPathname === '/growth-advertising' ? '!block' : ''}`}>
                                      <svg className="qodef-svg--menu-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153">
                                        <path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" fill="#ffde8b" transform="rotate(4.992 1.5265 35.01869904)"></path>
                                      </svg>
                                    </span>
                                  </p>
                
                                  {isSubmenuOpen && (
                                    <div className={`submenu  ${isSubmenuOpen1 ? 'show' : ''}`}>
                                      <ul>
                                        {[
                                          { name: 'Influencer Marketing', path: 'influencer-marketing' },
                                          { name: 'E-commerce Marketing', path: 'ecommerce-marketing' },
                                          { name: 'Facebook Ads', path: 'facebook-ads' },
                                          { name: 'PPC (Pay-Per-Click)', path: 'ppc' },
                                          { name: 'YouTube Marketing', path: 'youtube-marketing' },
                                          { name: 'Email Marketing', path: 'email-marketing' },
                                        ].map((item) => (
                                          <li className="relative group" key={item.path}>
                                            <Link to={`/growth-advertising/${item.path}`} className="flex items-center gap-2">
                                              <GoDotFill className="fill-[#ffde8b] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                                              <span className="transition-all duration-500 ease-in-out group-hover:ml-6">{item.name}</span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                                <div
                                  onMouseEnter={handleMouseEnter1}
                                  onMouseLeave={handleMouseLeave1}>
                                  <p
                                    className="cursor-pointer nav_link2"
                                  >
                                    <Link to="/creative-marketing">CREATIVE MARKETING</Link>
                                    <span className={`hover_img2 ${currentPathname === '/creative-marketing' ? '!block' : ''}`}>
                                      <svg className="qodef-svg--menu-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153">
                                        <path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" fill="#ffde8b" transform="rotate(4.992 1.5265 35.01869904)"></path>
                                      </svg>
                                    </span>
                                  </p>
                
                                  {isSubmenuOpen1 && (
                                    <div className={`submenu ${isSubmenuOpen1 ? 'show' : ''}`}>
                                      <ul>
                                        {[
                                          { name: 'Branding', path: 'branding' },
                                          { name: 'Graphic Design', path: 'graphic-design' },
                                          { name: '3D Branding', path: '3d-branding' },
                                          { name: 'Product Photography', path: 'product-photography' },
                                          { name: 'Modeling', path: 'modeling' },
                                          { name: 'Video Editing', path: 'video-editing' },
                                          { name: 'Motion Graphics', path: 'motion-graphics' },
                                          { name: 'Social Media Management', path: 'social-media-management' },
                                        ].map((item) => (
                                          <li className="relative group" key={item.path}>
                                            <Link to={`/creative-marketing/${item.path}`} className="flex items-center gap-2">
                                              <GoDotFill className="fill-[#ffde8b] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                                              <span className="transition-all duration-500 ease-in-out group-hover:ml-6">{item.name}</span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                <p className='cursor-pointer nav_link3'><Link to="/portfolio">PORTFOLIO</Link>
                  <span className={`hover_img3 ${currentPathname === '/portfolio' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153">
                                        <path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" fill="#ffde8b" transform="rotate(4.992 1.5265 35.01869904)"></path>
                                      </svg></span></p>
                {/* <p className='cursor-pointer nav_link4'><Link to="/faq">FAQs</Link>
                  <span className={`hover_img4 ${currentPathname === '/faq' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p> */}
                <p className='cursor-pointer nav_link5'><Link to="/blog" onClick={handleBlogclick}>BLOG</Link>
                  <span className={`hover_img5 ${currentPathname === '/blog' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153">
                                        <path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" fill="#ffde8b" transform="rotate(4.992 1.5265 35.01869904)"></path>
                                      </svg></span></p>
                <p className='cursor-pointer nav_link6'><Link to="/contact">CONTACT</Link>
                  <span className={`hover_img6 ${currentPathname === '/contact' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153">
                                        <path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" fill="#ffde8b" transform="rotate(4.992 1.5265 35.01869904)"></path>
                                      </svg></span></p>
                <div className={`flex cursor-pointer justify-end`}>
                  <div onClick={toggleDrawer2}>
                    {/* <img src={`/image/about/desktop_hum.png`} alt='' className='' /> */}
                    <DotGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex lg:hidden col-span-6 cursor-pointer justify-end`}>
            <div onClick={toggleDrawer}> <DotGrid /></div>
          </div>
        </div>
      </header>  

      <div
        className={`fixed top-0 right-0 w-[500px] h-full rounded-tl-[50px] grid items-center justify-center rounded-bl-[50px] z-[30000] border border-r-0 border-black bg-[#d2ebf8] shadow-lg transform ${isDrawerOpen2 ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={closeDrawer2} className="rotate-btn absolute top-4 right-4 text-lg bg-[#ffde8b] border border-black rounded-full p-2"><RxCross2 /></button>

        <div className="flex flex-col p-4 gap-4">
                  <div className='flex flex-col gap-16 justify-center items-center px-20'>
                    <div className='text-center'>
                      <img src='/image/logo.png' alt='' className='w-[200px] m-auto mb-4' />
                      <p>"Products are made in the factory, but brands are created in the mind." <br />– Walter Landor
                      </p>
                    </div>
                    <div className='text-center space-y-4'>
                      <h5 className='text-2xl font-semibold'>Contact Us</h5>
                      <p>213, Skyview Business Horizon, nr. Shyamdham Temple, Sarthana Jakat Naka, Surat, Gujarat -395006</p>
                      <p>info@codeyesmedia.com</p>
                      <p>+91 88497 23987</p>
                    </div>
                    <div className='flex text-2xl gap-4'>
                      <a href="https://in.linkedin.com/company/codeyes-media/" target='_blank' className='social_icon'> <FaLinkedin /></a>
                      <a href="https://www.facebook.com/codeyesmedia/" target='_blank' className='social_icon'> <FaFacebook /></a>
                      <a href="https://api.whatsapp.com/send?phone=88497239870" target='_blank' className='social_icon'> <FaWhatsapp /></a>
                      <a href="https://www.instagram.com/codeyesmedia/" target='_blank' className='social_icon'> <FaInstagram /></a>
                    </div>
        
                  </div>
                </div>
      </div>
      <div
        className={`fixed  right-0 w-full h-[460px] border-b border-black bg-white z-[30000] transform ${isDrawerOpen ? 'translate-y-0 top-0' : '-translate-y-full -top-24'} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='grid col-span-12 bg-[#fbfaf5] py-3 px-10'>
          <div className={`col-span-6`}>
            <Link to={`/`} className={``}>
              <img src="/image/logo.png" alt="Error" className='w-[120px]' />
            </Link>
          </div>
          <div className='col-span-6'>
            <button onClick={closeDrawer} className="rotate-btn absolute top-10 right-4 text-2xl text-[#ffde8b]">
              <RxCross2 />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 px-10">
          {/* <Link to="/" onClick={closeDrawer} className="text-[15px] font-semibold">HOME</Link>
          <Link to="/about" onClick={closeDrawer} className="text-[15px] font-semibold">ABOUT</Link>
          <Link to="/portfolio" onClick={closeDrawer} className="text-[15px] font-semibold">PORTFOLIO</Link>
          <Link to="/faq" onClick={closeDrawer} className="text-[15px] font-semibold">FAQs</Link>
          <Link to="/blog" onClick={closeDrawer} className="text-[15px] font-semibold">BLOG</Link>
          <Link to="/contact" onClick={closeDrawer} className="text-[15px] font-semibold">CONTACT</Link> */}
          <p className='cursor-pointer nav_link1'><Link to="/" className='text-[15px] font-semibold' onClick={closeDrawer}>HOME</Link>
            <span className={`hover_img1 ${currentPathname === '/' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span>
          </p>
          <p className='cursor-pointer nav_link2'><Link to="/about" className='text-[15px] font-semibold' onClick={closeDrawer}>ABOUT</Link>
            <span className={`hover_img2 ${currentPathname === '/about' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>

            <p className='cursor-pointer nav_link2'><Link to="/growth-advertising" className='text-[15px] font-semibold' onClick={closeDrawer}>GROWTH ADVERTISING</Link>
            <span className={`hover_img2 ${currentPathname === '/growth-advertising' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>

            <p className='cursor-pointer nav_link2'><Link to="/creative-marketing" className='text-[15px] font-semibold' onClick={closeDrawer}>CREATIVE MARKETING</Link>
            <span className={`hover_img2 ${currentPathname === '/creative-marketing' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
         
          <p className='cursor-pointer nav_link3'><Link to="/portfolio" className='text-[15px] font-semibold' onClick={closeDrawer}>PORTFOLIO</Link>
            <span className={`hover_img3 ${currentPathname === '/portfolio' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
          <p className='cursor-pointer nav_link4'><Link to="/faq" className='text-[15px] font-semibold' onClick={closeDrawer}>FAQs</Link>
            <span className={`hover_img4 ${currentPathname === '/faq' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
          <p className='cursor-pointer nav_link5'><Link to="/blog" className='text-[15px] font-semibold' onClick={closeDrawer}>BLOG</Link>
            <span className={`hover_img5 ${currentPathname === '/blog' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
          <p className='cursor-pointer nav_link6'><Link to="/contact" className='text-[15px] font-semibold' onClick={closeDrawer}>CONTACT</Link>
            <span className={`hover_img6 ${currentPathname === '/contact' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#ffde8b]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
        </div>
      </div>


      {isDrawerOpen && <div className="fixed inset-0 opacity-50 z-40" onClick={closeDrawer}></div>}
    </>
  );
}
