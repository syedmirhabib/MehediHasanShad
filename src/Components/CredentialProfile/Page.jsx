import React from "react";
import {
  FaBehanceSquare,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import personImg from "../../assets/person.png";

const Page = () => {
  const socialIcon = [
    {
      id: 1,
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/mehedi-hasan-shad-b3463b254/",
      hcolor: "hover:text-[#0A66C2]",
    },
    {
      id: 2,
      icon: <FaBehanceSquare size={20} />,
      url: "https://www.behance.net/mobasherhossain143",
      hcolor: "hover:text-black",
    },
    {
      id: 3,
      icon: <FaInstagram size={20} />,
      url: "https://www.instagram.com/itz_me_shad_143/",
      hcolor: "hover:text-[#E70E1A]",
    },
    {
      id: 5,
      icon: <FaFacebookSquare size={20} />,
      url: "https://www.facebook.com/mhsshad.143",
      hcolor: "hover:text-[#1A8CD8]",
    },
  ];

  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#262626] to-[#151515]  rounded-3xl p-10 relative group">
      <div>
        <img
          src={personImg}
          className="rounded-3xl border border-[#8a8a8a] border-opacity-25"
          alt="personImage"
        />
      </div>
      <div className="text-4xl text-white text-center font-semibold mt-4">
        <p>Mehedi Hasan Shad</p>
        <p className="capitalize text-sm font-medium text-[#8a8a8a] mt-1">
          mhsshad143
        </p>
      </div>
      {/* social icon */}
      <div>
        <div className="flex justify-center bg-[#1D1D1D] border border-white border-opacity-5 text-white  rounded-3xl p-2 items-center space-x-4 mt-3">
          {socialIcon.map((social) => (
            <a href={social.url} target="black" key={social.id}>
              <div
                className={`bg-gradient-to-r from-[#262626] to-[#171717] p-3 rounded-full border border-white border-opacity-10 shadow hover:from-[#ffffff] hover:to-[#8df2ff] cursor-pointer transition ease-linear duration-200 delay-100 font-medium ${social.hcolor}`}
              >
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Link to="/contact">
          <button className="w-full px-5 py-2.5 text-[#fff] hover:text-[#000] bg-[#323232] hover:bg-[#f5f5f5] font-medium rounded-lg transition ease-linear duration-200 delay-75">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
