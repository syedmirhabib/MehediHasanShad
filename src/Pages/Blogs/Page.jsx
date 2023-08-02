import React from "react";
import { FaClock } from "react-icons/fa";
import icon from "../../assets/icon.svg";

const Page = () => {
  const blogs = [
    {
      id: 1,
      cover: "https://i.ibb.co/7XxT6JX/image.png",
      title: "Mastering Motion Graphics: The Art of Dynamic Visuals",
      content:
        "Motion Graphics is the art of bringing visual elements to life through animation, adding depth and interactivity to static designs. Learn how to create captivating animations that mesmerize your audience and elevate your creative projects to new heights.",
      readtime: 3,
    },
    {
      id: 2,
      cover: "https://i.ibb.co/mbtFCkM/image.png",
      title: "Unveiling the Secrets of VFX: Blending Reality and Fantasy",
      content:
        "Visual Effects (VFX) has the power to seamlessly merge real-world footage with computer-generated imagery, creating breathtaking scenes that defy imagination. Delve into the world of VFX and discover the technical wizardry behind your favorite blockbuster movies and mind-bending visuals.",
      readtime: 2,
    },
    {
      id: 3,
      cover: "https://i.ibb.co/Dky2qgD/image.png",
      title: "The Art of Video Editing: Crafting Compelling Narratives",
      content:
        "Video Editing is the alchemy of storytelling, where raw footage is transformed into a coherent and emotionally engaging narrative. Explore the art of editing and learn how to manipulate footage, add visual effects, and use sound design to captivate your audience.",
      readtime: 1,
    },
    {
      id: 4,
      cover: "https://i.ibb.co/jDfYV7T/image.png",
      title:
        "From Concept to Screen: The Journey of a Motion Graphics Designer",
      content:
        "Join us on a behind-the-scenes tour of a Motion Graphics Designer's creative process. From ideation and storyboarding to animating and refining, witness how these talented artists breathe life into static visuals, making them dance and captivate.",
      readtime: 5,
    },
    {
      id: 5,
      cover: "https://i.ibb.co/wWb2byq/image.png",
      title: "VFX Demystified: How Movie Magic Comes to Life",
      content:
        " Step into the realm of VFX and unlock the secrets of Hollywood's movie magic. Discover the advanced technologies and groundbreaking techniques that allow filmmakers to transport us to fantastical worlds, reshape reality, and make the impossible seem real.",
      readtime: 5,
    },
    {
      id: 6,
      cover: "https://i.ibb.co/Gn7g4nj/image.png",
      title:
        "The Power of Post-Production: Elevating Videos with Editing Wizardry",
      content:
        "Post-production is the unsung hero of filmmaking, where hours of footage are meticulously crafted into a polished and compelling story. Learn the art of video editing, color grading, and sound design, and witness how post-production can elevate your videos to professional standards.",
      readtime: 5,
    },
  ];
  
  return (
    <div className='max-w-6xl md:mx-auto mx-2 mb-16'>
      <div>
        <h1 className='text-center mt-10 text-3xl font-bold text-[#f5f5f5] uppercase'>
          All Blogs{" "}
          <span className='text-sm font-medium text-gray-300'>
            (beta version)
          </span>
        </h1>
      </div>
      <div className='flex justify-center mt-5 max-w-3xl mx-auto'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full p-5 px-8 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-full text-white'
        />
      </div>

      {/* Updated grid layout for mobile devices */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {blogs.map((blog) => (
          <div
            className='relative group rounded-3xl p-5 bg-gradient-to-r from-[#262626] to-[#151515] mb-8 md:mb-0'
            key={blog.id}
          >
            <img
              src={blog.cover}
              alt='cover'
              className='rounded-3xl object-cover w-full h-56 mt-5'
            />
            <div className='mt-8'>
              <h1 className='text-md font-semibold text-white '>
                {blog.title}
              </h1>
              <p className='mt-3 text-sm text-[#f8f8f8] leading-snug'>
                {blog.content.slice(0, 100)}
              </p>
              <div className='flex items-center justify-between mt-5'>
                <span className='text-white font-medium flex items-center space-x-2'>
                  <FaClock size={24} />
                  <p>{blog.readtime} min</p>
                </span>
                <div className='cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
                  <img src={icon} alt='icon' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
