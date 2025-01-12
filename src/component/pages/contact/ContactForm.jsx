import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoogleMap, Marker, LoadScript, InfoWindow } from "@react-google-maps/api";
import Loader from "../../layout/Loader";
import { BASE_URL, GOOGLE_MAPS_API_KEY } from "../../../utils/config";
import axios from "axios";
import { toast } from "react-toastify";

const mapContainerStyle = {
  width: "100%",
  height: "700px",
};

const ContactForm = () => {
  // State for custom dropdown
  const [selectedService, setSelectedService] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);



  // Services for dropdown
  // const services = [
  //     { value: "seo", label: "SEO Services" },
  //     { value: "socialMedia", label: "Social Media Marketing" },
  //     { value: "contentMarketing", label: "Content Marketing" },
  //     { value: "emailMarketing", label: "Email Marketing" },
  //     { value: "ppc", label: "Pay-Per-Click Advertising" },
  //     { value: "digitalMarketingStrategy", label: "Digital Marketing Strategy" }
  // ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    option: "",
  });

  const handleServiceSelect = (service) => {
    // console.log(service.service)
    setSelectedService(service.service);
    setDropdownOpen(false);
    setFormData({ ...formData, option: service.service });
  };



  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      // console.log(JSON.stringify(formData));
      const response = await fetch(`${BASE_URL}/add-contact-us?organizationId=codeyes_media`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully!");
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setSelectedService("");
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again.");
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const [blogPosts, setBlogData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/all-services?organizationId=codeyes_media`);
        // const response = await axios.get(`https://codeyes-server.vercel.app/api/admin/all-services?organizationId=codeyes_media`);

        setBlogData(response.data.data);
        // console.log(response.data.data)
        setLoadingData(false);
      } catch (err) {
        setError("Failed to fetch blog data.");
        setLoadingData(false);
      }
    };

    fetchBlogs();
  }, []);

  // console.log("blogData",blogPosts);

  if (loading || loadingData) {  
    return <Loader />;
  }

  return (
    <div className="border border-black rounded-[50px] overflow-hidden justify-center">
      <div className="grid lg:grid-cols-2 p-6 bg-[#cbdec6] rounded-lg shadow-md h-full">
        <div className="w-full lg:col-span-1">
        <img src="/image/portfoilo/contact.jpg" alt="Error" className='h-full object-cover rounded-3xl' />
        </div>

        <div className="w-full lg:col-span-1 px-0 md:px-8 lg:px-20 py-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-[#151015] mb-12">Drop Us A Note!</h2>
          <form className="space-y-8 mt-10" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="w-full py-4 px-5 border border-black focus:outline-none rounded-full"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full py-4 px-5 border border-black focus:outline-none rounded-full"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <div className="w-full py-4 px-5 border border-black bg-white rounded-full cursor-pointer flex justify-between items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span className="text-[#727987]">{selectedService || "Select a Service"}</span>
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>

              {dropdownOpen && (
                <ul className="absolute z-50 w-[95%] left-[2.5%] max-h-[300px] overflow-y-scroll  bg-white border border-black rounded-3xl overflow-hidden mt-2">
                  {blogPosts.map((service) => (
                    <li key={service.service} className="py-2 z-50 px-5 hover:bg-gray-100 cursor-pointer" onClick={() => handleServiceSelect(service)}>
                      {service.service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message*"
                rows={4}
                className="w-full py-4 px-5 border border-black focus:outline-none rounded-3xl"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex z-0 justify-start">
               <button
                                              type="submit"
                                              className="relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[200px] m-auto text-lg overflow-hidden flex items-center mt-10"
                                          >
                                              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ffde8b] rounded-full group-hover:w-full group-hover:h-56"></span>
                                              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                                              <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                                  <GoDotFill className="text-[#ffde8b]" />
                                                  <span className="sliding-text hidden group-hover:block">Send Message</span>
                                                  <GoDotFill className="text-[#ffde8b] hidden group-hover:block" />
                                                  <span className="sliding-text hidden group-hover:block">Send Message</span>
                                                  <GoDotFill className="text-[#ffde8b] hidden group-hover:block" />
                                                  <span className="sliding-text">Send Message</span>
                                              </div>
                                          </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
