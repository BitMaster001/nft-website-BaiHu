import Image from "next/image";
import * as s from './SocialIcons.Components'
import imgOpensea from 'assets/images/social/opensea.png'
import imgTwitter from 'assets/images/social/twitter.png'
import imgDiscord from 'assets/images/social/discord.png'
import imgInstagram from 'assets/images/social/instagram.png'

const ICONDATA = [
  { name: "opensea", imgSrc: imgOpensea, link: "https://opensea.io/baihugenesis" },
  { name: "twitter", imgSrc: imgTwitter, link: "https://twitter.com/baihunft" },
  { name: "discord", imgSrc: imgDiscord, link: "https://discord.com/invite/y5Pj58VQNt" },
  { name: "instagram", imgSrc: imgInstagram, link: "https://instagram.com/baihunft" },
];

const SocialIcons = () => {
  return (
    <>
      <s.SocialIconsContainer>
        {ICONDATA.map((data, index) => (
          <s.IconContainer key={index} href={data.link} target="_blank" rel="noreferrer">
            <Image src={data.imgSrc} layout="fill" alt={data.name} quality={100} />
          </s.IconContainer>
        ))}
      </s.SocialIconsContainer>
    </>
  );
};

export default SocialIcons;
