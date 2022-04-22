import Image from "next/image";

export const Member = ({ imgSrc, label }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="mobile:w-[100px] mobile:h-[85px] miniipad:w-[140px] miniipad:h-[119px] relative rounded-[20px] overflow-hidden">
        <Image src={imgSrc} layout="fill" alt="" />
      </div>
      <p className="text-[#FF0000] mobile:text-[14px] miniipad:text-[18px] text-center mobile:w-[150px] miniipad:w-[200px]">{label}</p>
    </div>
  );
};
