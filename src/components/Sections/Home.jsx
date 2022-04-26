import { useState, useEffect } from 'react'
import Image from "next/image";
import imgBgBaihu from '../../assets/images/bg-baihu.jpg'

import * as s from './Home.Components'
import * as gs from 'assets/Global.Components'

const Home = ({ openModal }) => {

  const [timeLeft, setTimeLeft] = useState("")

  let x;
  
  function count() {
    var t = (new Date("Thu Apr 26 2022 17:00:00 GMT-0400").getTime()) - Date.now();
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    if (t < 0) {
      clearInterval(x);
      setTimeLeft("Hurry to buy!");
      return;
    }

    var days = (dd < 10 ? "0" + dd : dd).toString();
    var hours = (hh < 10 ? "0" + hh : hh).toString();
    var minutes = (mm < 10 ? "0" + mm : mm).toString();
    var seconds = (ss < 10 ? "0" + ss : ss).toString();

    setTimeLeft(days + ":" + hours + ":" + minutes + ":" + seconds)
  }

  useEffect(() => {
    x = setInterval(count, 1000);
  }, [])

  return (
    <gs.SectionWrapper id="home" className="flex mobile:flex-col-reverse miniipad:flex-row gap-8">
      <div className="flex flex-col items-center justify-center mobile:gap-4 gap-8 mobile:w-full miniipad:w-[33%] text-center">
        <s.Info>OG WL MINT STARTED ON RINKEBY</s.Info>
        {/* <s.Info>{timeLeft}</s.Info> */}
        <button className="mt-4 px-10 py-2 rounded-lg bg-[#0000FF] hover:bg-[#EE2222] transition-all mobile:text-base ipad:text-[30px] font-bold" onClick={openModal}>Mint</button>
      </div>
      <div className="mobile:w-full miniipad:w-[67%]">
        <Image src={imgBgBaihu} width={1920} height={1080} alt="" />
      </div>
    </gs.SectionWrapper>
  );
};

export default Home;
