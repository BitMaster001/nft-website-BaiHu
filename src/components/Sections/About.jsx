import Image from "next/image";
import imgBgAbout from '../../assets/images/bg-about.jpg'
import { Fade } from "react-awesome-reveal";

import * as gs from 'assets/Global.Components'

const About = () => {
  return (
    <gs.SectionWrapper id="about" className="flex gap-8 mobile:flex-col-reverse miniipad:flex-row">
      <div className="mobile:w-full miniipad:w-[50%] p-4">
        <Fade direction="left">
          <Image src={imgBgAbout} width={1536} height={1322} alt="" />
        </Fade>
      </div>
      <div className="flex flex-col justify-center items-center mobile:gap-4 gap-8 mobile:w-full miniipad:w-[50%] text-center">
        <gs.SectionTitle>ABOUT</gs.SectionTitle>
        <gs.Text>
          We are passionate to create One Of The Strongest Community in metaverse. This Project is only for the Community and is All About the Community. This is Just The Begininning. We are a Team Of Enthusiast and Passionate members who want to make a change in NFT Space. We are Doing and Executing Everything At Perfect time to not lose the hype. Join us in our Early Stage Because Baihu Is The Future.
        </gs.Text>
      </div>
    </gs.SectionWrapper>
  );
};

export default About;
