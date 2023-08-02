import React, { useState } from "react";
// import YouTube from "react-youtube";
import { FaYoutube, FaBehanceSquare } from "react-icons/fa";
import icon from "../../assets/icon.svg";
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.png";
import projectImg3 from "../../assets/project3.png";
import projectImg4 from "../../assets/project4.png";
import projectImg5 from "../../assets/project5.png";

const Protfolio = () => {
  const projectData = [
    {
      id: 1,
      title: "Brand Promo Animation",
      image: projectImg1,
      description:
        "BRAND PROMOTION MOTION GRAPHICS VIDEO USING ADOBE AFTER EFFECTS",
      tags: ["Adobe After Effects,", "Adobe Illustrator", "Adobe Photoshop"],
      repoLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      serverLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      livelink: "https://www.youtube.com/watch?v=gxtWRHMeVRs/",
    },
    {
      id: 2,
      title: "YouTube Intro 3D",
      image: projectImg2,
      description:
        "INTRO ANIMATION FOR YOUTUBE CHANNEL USING CINEMA 4D AND PREMIERE PRO",
      tags: ["Cinema 4D", "Adobe Premiere Pro", "Adobe Audition"],
      repoLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      serverLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      livelink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
    },
    {
      id: 3,
      title: "Music Video VFX",
      image: projectImg3,
      description:
        "MUSIC VIDEO EDITING AND VFX USING FINAL CUT PRO X AND HITFILM EXPRESS",
      tags: ["Final Cut Pro X", "HitFilm Express", "Adobe Photoshop"],
      repoLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      serverLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      livelink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
    },
    {
      id: 4,
      title: "Product Demo CGI",
      image: projectImg4,
      description:
        "PRODUCT DEMONSTRATION ANIMATION USING BLENDER AND DAVINCI RESOLVE",
      tags: ["Blender", "DaVinci Resolve", "Adobe Illustrator"],
      repoLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      serverLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      livelink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
    },
    {
      id: 5,
      title: "Educational Explainer",
      image: projectImg5,
      description: "EXPLAINER VIDEO FOR EDUCATIONAL CONTENT USING POWTOON",
      tags: ["Powtoon", "Adobe Illustrato", "Adobe Audition"],
      repoLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      serverLink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
      livelink: "https://www.youtube.com/watch?v=gxtWRHMeVRs",
    },
  ];

  // // Play video on mouse hover
  // const [videoHovered, setVideoHovered] = useState(null);

  // const handleVideoMouseEnter = (id) => {
  //   setVideoHovered(id);
  // };

  // const handleVideoMouseLeave = () => {
  //   setVideoHovered(null);
  // };

  return (
    <div className="max-w-6xl md:mx-auto mx-2">
      <div className="mt-10">
        <h1 className="text-7xl font-bold uppercase text-center text-[#f5f5f5]">
          MY WORK
        </h1>
      </div>
      {projectData.map((project) => (
        <div
          key={project.id}
          className="max-w-6xl mx-auto my-5 rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group shadow shadow-black"
        >
          {/* Project Video */}
          // <div
          //   className="w-full aspect-w-16 aspect-h-9 bg-[#1D1D1D] border border-white border-opacity-5 rounded-3xl overflow-hidden"
          //   onMouseEnter={() => handleVideoMouseEnter(project.id)}
          //   onMouseLeave={handleVideoMouseLeave}
          // >
          //   {videoHovered === project.id ? (
          //     <YouTube
          //       videoId={project.serverLink} // Replace with the YouTube video ID
          //       opts={{
          //         playerVars: {
          //           autoplay: 0, // Set to 1 if you want autoplay
          //         },
          //       }}
          //     />
          //   ) : (
          //     <img
          //       src={project.image}
          //       alt="project-cover"
          //       className="object-cover w-full h-full"
          //     />
          //   )}
          // </div>

          {/* Project Image */}
          <div className="w-full aspect-w-16 aspect-h-9 bg-[#1D1D1D] border border-white border-opacity-5 rounded-3xl overflow-hidden">
            <img
              src={project.image}
              alt="project-cover"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Project Description and Title */}
          <div className="mt-7">
            <p className="text-xs uppercase font-medium text-[#8a8a8a] mb-2">
              {project.description}
            </p>
            <p className="text-2xl font-semibold text-white">{project.title}</p>
          </div>

          {/* Project Tags */}
          <div className="flex flex-wrap mt-4 md:space-x-2 gap-5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-white bg-gradient-to-r from-[#262626] to-[#151515] px-3 py-1 rounded-lg text-xs border border-white border-opacity-30 "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="absolute flex items-center bottom-5 right-4 space-x-3">
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icon}
                alt="icon"
                className="w-12 h-12 opacity-40 group-hover:opacity-100 transition-opacity ease-in-out duration-200"
              />
            </a>
            <a
              href={project.serverLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-red-500 text-xl" />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehanceSquare className="text-blue-700 text-xl" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Protfolio;
