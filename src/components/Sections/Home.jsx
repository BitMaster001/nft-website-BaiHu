import { useState, useEffect } from 'react'
import Image from "next/image";
import imgBgBaihu from '../../assets/images/bg-baihu.jpg'

import * as s from './Home.Components'
import * as gs from 'assets/Global.Components'

const Home = ({ openModal }) => {

  const [loading, setLoading] = useState(true)
  const [timeout, setTimeout] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  let x;

  function count() {
    // var t = (new Date("Fri May 27 2022 12:00:00 GMT-0400").getTime()) - Date.now();
    var t = (new Date("Sat Jun 04 2022 12:00:00 GMT-0400").getTime()) - Date.now();
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    if (t < 0) {
      clearInterval(x);
      setTimeout(true);
      return;
    }

    var _days = (dd < 10 ? "0" + dd : dd).toString();
    var _hours = (hh < 10 ? "0" + hh : hh).toString();
    var _minutes = (mm < 10 ? "0" + mm : mm).toString();
    var _seconds = (ss < 10 ? "0" + ss : ss).toString();

    setDays(_days)
    setHours(_hours)
    setMinutes(_minutes)
    setSeconds(_seconds)
  }

  useEffect(() => {
    setLoading(false)
    x = setInterval(count, 1000);
  }, [])

  return (
    <gs.SectionWrapper id="home" className="flex mobile:flex-col-reverse miniipad:flex-row gap-8">
      {loading ? null : !timeout && (days + hours + minutes + seconds == 0) ? null : (
        <div className="flex flex-col items-center justify-center mobile:gap-4 gap-8 mobile:w-full miniipad:w-[33%] text-center">
          <s.Info>OG WL MINT {timeout ? `STARTED! LFG!` : `COMING SOON`}</s.Info>
          <s.Info>{timeout ? `Hurry up!` : `${days} : ${hours} : ${minutes} : ${seconds}`}</s.Info>
          {timeout && (
            <button className="mt-4 px-10 py-2 rounded-lg bg-[#0000FF] hover:bg-[#EE2222] transition-all mobile:text-base ipad:text-[30px] font-bold" onClick={openModal}>Mint</button>
          )}
        </div>
      )}
      <div className="mobile:w-full miniipad:w-[67%]">
        <Image src={imgBgBaihu} width={1920} height={1080} alt="" />
      </div>
    </gs.SectionWrapper>
  );
};

export default Home;
