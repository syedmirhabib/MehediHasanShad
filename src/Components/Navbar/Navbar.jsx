import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // state to control menu visibility

  return (
    <div className="max-w-6xl md:mx-auto mx-4 z-50 ">
      <div className="md:flex md:flex-row items-center flex flex-col justify-between md:gap-y-0 gap-y-7 md:py-6 py-5">
        {/* div 1 */}
        <div className="md:w-auto w-full md:flex md:justify-between  md:items-center flex justify-between items-center  ">
          <Link to="/">
            <span className="text-5xl font-bold shadow-inner text-[#f5f5f5] rounded-full">
              shad.
            </span>
          </Link>
          {/* hamburger icon for mobile view */}
          <div
            className="md:hidden cursor-pointer text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <FaWindowClose size={24} /> : <FaBars size={24} />}
          </div>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } md:flex md:items-center justify-between md:mt-0 mt-4`}
        >
          <nav>
            <ul className="flex flex-col md:flex-row items-center md:space-x-16 space-y-5 md:space-y-0 md:text-md text-md font-medium cursor-pointer ">
              <li className={`text-[#676767] `}>
                <Link to="/" onClick={() => setShowMenu(false)}>
                  Home
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to="/projects" onClick={() => setShowMenu(false)}>
                  Projects
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to="/blogs" onClick={() => setShowMenu(false)}>
                  Blogs
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to="/about" onClick={() => setShowMenu(false)}>
                  About
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to="/contact" onClick={() => setShowMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* div 2 */}
        {/* div 3 */}
        <div
          className={`${showMenu ? "block" : "hidden"} md:block mt-5 md:mt-0`}
        >
          <a
            href="https://drive.google.com/file/d/1X0mfx0YIM7zNHWUWfdgZHfblKY8oyVw1/view"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-[#fff] hover:text-[#000] bg-[#323232] hover:bg-[#f5f5f5] font-medium rounded-lg transition ease-linear duration-200 delay-75"
            onClick={() => setShowMenu(false)}
          >
            Resume
          </a>
        </div>
        {/* div 3 */}
      </div>
    </div>
  );
};

export default Navbar;
