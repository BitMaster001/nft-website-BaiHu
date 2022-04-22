import { Fade } from "react-awesome-reveal";
import * as gs from 'assets/Global.Components'
import * as s from './Team.Components'

import img1 from 'assets/images/team/1.jpg'
import img2 from 'assets/images/team/2.jpg'
import img3 from 'assets/images/team/3.jpg'
import img4 from 'assets/images/team/4.jpg'
import img5 from 'assets/images/team/5.jpg'
import img6 from 'assets/images/team/6.jpg'
import img7 from 'assets/images/team/7.jpg'
import img8 from 'assets/images/team/8.jpg'
import img9 from 'assets/images/team/9.jpg'

const data = [
  { imgSrc: img1, label: "aizaz.eth - Founder"},
  { imgSrc: img2, label: "anees.eth - Co-Founder"},
  { imgSrc: img3, label: "jonas - Co-Founder"},
  { imgSrc: img4, label: "kawiyay - Artist"},
  { imgSrc: img5, label: "fazechu - Artist"},
  { imgSrc: img6, label: "danieljin - Developer"},
  { imgSrc: img7, label: "kratos - Developer"},
  { imgSrc: img8, label: "Hulk - Community Manager"},
  { imgSrc: img9, label: "KryptoNick - Marketing"},
]

const Team = () => {
  return (
    <gs.SectionWrapper id="team">
      <gs.SectionTitle>TEAM</gs.SectionTitle>
      <div className="flex flex-wrap mobile:gap-4 miniipad:gap-8 justify-center mobile:mt-6 miniipad:mt-10">
        {data.map((it, index) => (
          <Fade key={index} direction="up">
            <s.Member imgSrc={it.imgSrc} label={it.label} />
          </Fade>
        ))}
      </div>
    </gs.SectionWrapper>
  )
}
export default Team;
