import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, IMAGE_BASE_URL } from "../../utils/config";
import Loader from "../layout/Loader";  

export default function PortfolioDesign() {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipAlignment, setTooltipAlignment] = useState({
    x: "left",
    y: "top",
  });

  const [blogPosts, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/all-portfolio?organizationId=codeyes_media`
        );
        
        const posts = Array.isArray(response.data.data) ? response.data.data : [];
        setBlogData(posts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blog data.");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleMouseMove = (e, container) => {
    const rect = container.getBoundingClientRect();
    const tooltipWidth = 300;
    const tooltipHeight = 60;

    let xPos = e.clientX - rect.left;
    let yPos = e.clientY - rect.top;

    let xAlign = "left";
    let yAlign = "top";

    if (xPos + tooltipWidth > rect.width) {
      xAlign = "right";
      xPos = rect.width - tooltipWidth;
    }

    if (yPos + tooltipHeight > rect.height) {
      yAlign = "bottom";
      yPos = rect.height - tooltipHeight;
    }

    setTooltipPosition({ x: xPos, y: yPos });
    setTooltipAlignment({ x: xAlign, y: yAlign });
  };

  const renderPortfolioItem = (post, index, className, isDummy = false) => {
    if (!post) return null;
    return (
      <div
        key={index}
        className={`border border-black relative cursor-pointer group rounded-[40px] overflow-hidden ${className}`}
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
      >
        <Link to={`/portfolio-slug/${post.id || index + 1}`}>
          <img
            src={`${IMAGE_BASE_URL}/${(post.banner_image && post.banner_image[0]) || ''}`}
            alt={`Portfolio item ${index + 1}`}
            className="h-full w-full object-cover img_hover_effect"
          />
          <img
            src={`${IMAGE_BASE_URL}/${(post.pictures && post.pictures[0]) || ''}`}
            alt={`Portfolio item ${index + 1} hover`}
            className="h-full w-full object-cover img_hover_effect"
          />
          <div
            style={{
              top: tooltipAlignment.y === "top" ? tooltipPosition.y : "auto",
              bottom: tooltipAlignment.y === "bottom" ? 0 : "auto",
              left: tooltipAlignment.x === "left" ? tooltipPosition.x : "auto",
              right: tooltipAlignment.x === "right" ? "50px" : "auto",
            }}
            className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
          >
            {String(post.category || "Art")}
          </div>
          <div
            style={{
              top: tooltipAlignment.y === "top" ? tooltipPosition.y + 40 : "auto",
              bottom: tooltipAlignment.y === "bottom" ? 40 : "auto",
              left: tooltipAlignment.x === "left" ? tooltipPosition.x : "auto",
              right: tooltipAlignment.x === "right" ? "50px" : "auto",
            }}
            className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
          >
            {String(post.name || "Visual Concept")}
          </div>
        </Link>
      </div>
    );
  };

  const renderGridSection = (startIndex) => {
    const postsSubset = blogPosts.slice(startIndex, startIndex + 12);
    if (postsSubset.length === 0) return null;

    return (
      <div key={startIndex} className="grid grid-cols-2">
        {postsSubset.length > 1 ? renderPortfolioItem(postsSubset[0], startIndex + 0, "col-span-2 lg:col-span-1 port_img port_img1") 
        : 
        (renderPortfolioItem(postsSubset[0], startIndex + 0, "col-span-2 port_img port_img5"))}
        {postsSubset.length > 1 && (
          <div className="col-span-2 lg:col-span-1">
            <div className="grid sm:grid-cols-2">
              {[1, 2, 3, 4].map((offset) => 
                postsSubset[offset] && renderPortfolioItem(postsSubset[offset], startIndex + offset, "col-span-1 port_img")
              )}
            </div>
          </div>
        )}
        {postsSubset.length > 5 && renderPortfolioItem(postsSubset[5], startIndex + 5, "col-span-2 port_img port_img5")}
        {postsSubset.length > 6 && renderPortfolioItem(postsSubset[6], startIndex + 6, "col-span-2 lg:col-span-1 port_img port_img6")}
        {postsSubset.length > 7 && renderPortfolioItem(postsSubset[7], startIndex + 7, "col-span-2 lg:col-span-1 port_img port_img7")}
        {postsSubset.length > 8 && (
          <div className="col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[8, 9, 10, 11].map((offset) => 
                postsSubset[offset] && renderPortfolioItem(postsSubset[offset], startIndex + offset, "col-span-1 port_img")
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <svg className="svg-distort">
        <defs>
          <filter id="displacement-filter" className="svg_filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.05"
              numOctaves="5"
              result="warp"
            />
            <feGaussianBlur in="warp" stdDeviation="8" result="blurredWarp" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredWarp"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className="flex flex-col h-auto">
        {Array.from({ length: Math.ceil(blogPosts.length / 12) }, (_, index) => 
          renderGridSection(index * 12)
        )}
      </div>
    </>
  );
}

