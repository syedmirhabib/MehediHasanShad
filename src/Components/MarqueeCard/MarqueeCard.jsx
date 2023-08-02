import React from "react";

const MarqueeCard = () => {
  return (
    <div className="rounded-full bg-gradient-to-r from-[#262626] to-[#151515] border border-[#8a8a8a] border-opacity-25">
      <marquee
        behavior=""
        direction=""
        className="p-2 pt-2.5 text-[#8a8a8a] mx-5 font-medium"
      >
        <ul className="list-disc flex items-center space-x-7 uppercase text-xs">
          <li>
            Unleashing Artistic Brilliance: Crafting Stunning{" "}
            <span className="font-semibold text-white">
              Motion Graphics Masterpieces
            </span>
          </li>
          <li>
            Empowering Creativity: Building a Powerful and Secure Motion{" "}
            <span className="font-semibold text-white">Graphics Works</span>
          </li>
          <li>
            Latest work and{" "}
            <span className="font-semibold text-white">Featured</span>
          </li>
          <li>
            Latest work and{" "}
            <span className="font-semibold text-white">
              Featured comming soon....
            </span>
          </li>
        </ul>
      </marquee>
    </div>
  );
};

export default MarqueeCard;
