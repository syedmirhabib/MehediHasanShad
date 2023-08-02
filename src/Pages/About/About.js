import Page from "../../Components/CredentialProfile/Page";
import Specialization from "../../Components/Specialization/Specialization";
import WorkTogether from "../../Components/WorkTogether/WorkTogether";

const About = () => {
  return (
    <div className="max-w-6xl md:mx-auto mx-2">
      <div className="grid md:grid-cols-12 gap-20 my-10">
        <div className="md:col-span-4">
          <Page></Page>
        </div>
        <div className="md:col-span-8">
          {/* about info */}
          <div>
            <h1 className="text-2xl font-semibold text-[#f5f5f5] uppercase">
              About me
            </h1>
            <div className="mt-8 text-justify">
              <p className="text-sm text-white">
                Hi, I’m Mehedi Hasan Shad, a Motion Graphics Designer.
              </p>
              <p className="mt-2 text-sm text-white">
                I have been dedicatedly preparing myself in such a way that
                recruiters find it challenging to eliminate me during the hiring
                process.
              </p>
              <p className="mt-2 text-sm text-white">
                I started my journey in the world of design after completing my
                high school, and since then, I have been continuously honing my
                skills and enriching my CV.
                <br /> #creative
              </p>
            </div>
          </div>
          <div className="my-5">
            <Specialization></Specialization>
          </div>
          <div>
            <WorkTogether></WorkTogether>
          </div>
          {/* about info */}
        </div>
      </div>
    </div>
  );
};

export default About;
