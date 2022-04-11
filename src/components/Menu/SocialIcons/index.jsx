import Image from "next/image";
import tw from "tailwind-styled-components";

const ICONDATA = [
  { name: "twitter", imgUrl: "/images/twitter.svg" },
  { name: "discord", imgUrl: "/images/discord.svg" },
  { name: "instagram", imgUrl: "/images/instagram.svg" },
];

const S = {
  SocialIconsContainer: tw.div`
  flex justify-center items-center gap-[15px]
`,
  IconContainer: tw.div`
  relative cursor-pointer

  mobile:w-[20px] 
  mobile:h-[16px] 
  
  desktop:w-[20px] 
  desktop:h-[16px] 
`,
};

const SocialIcons = () => {
  return (
    <>
      <S.SocialIconsContainer>
        {ICONDATA.map((data, index) => (
          <S.IconContainer key={index}>
            <Image src={data.imgUrl} layout="fill" alt={data.name} />
          </S.IconContainer>
        ))}
      </S.SocialIconsContainer>
    </>
  );
};

export default SocialIcons;
