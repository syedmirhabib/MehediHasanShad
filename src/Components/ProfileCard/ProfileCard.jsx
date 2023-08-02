import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import personImg from "../../assets/person.png";

const ProfileCard = () => {
  return (
    <>
      <Link to="/about">
        <div className="w-full h-full bg-gradient-to-r from-[#262626] to-[#151515]  rounded-3xl p-10 relative group">
          <div className="flex md:flex-row flex-col items-center md:space-x-6 space-y-3">
            <div>
              <img
                src={personImg}
                className="md:rounded-tl-3xl md:rounded-br-3xl rounded-3xl border border-[#8a8a8a]"
                alt="personImage"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-md uppercase font-bold text-[#8a8a8a]">
                A Motion Graphics Designer
              </p>
              <span className="md:text-4xl text-3xl text-white font-semibold">
                <p>shad</p>
                <p>Hasan.</p>
              </span>
              <p className="capitalize text-sm font-medium text-[#8a8a8a]">
                A talented Motion Graphics Designer passionate about creating
                dynamic and user-friendly animations.
              </p>
            </div>
            <div className="absolute md:bottom-5 bottom-24 md:right-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100">
              <Link to="/about">
                <img src={icon} alt="icon" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProfileCard;
