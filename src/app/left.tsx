import React, { useRef } from "react";
import Logo from "./LogoLog.svg";
import Slide1 from "./slide1.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import Slide2 from "./Slide2.svg";
import Slide3 from "./Slide3.svg";

export default function Left() {
  const oneRef: any = useRef(null);
  const twoRef: any = useRef(null);
  const threeRef: any = useRef(null);
  const images = [Slide1, Slide2, Slide3];
  const dots = [oneRef, twoRef, threeRef];
  const [num, setNum] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (num == 2) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [num]);

  return (
    <div>
      <div className="h-screen w-[100%] flex flex-col gap-[2.3rem] items-center mr-[2rem]">
        <Image
          src={Logo}
          alt="Logo"
          className="transform translate-y-6"
          height={150}
          width={150}
        />
        <div className="h-[400px] py-[1rem]">
          <Image src={images[num]} alt="s1" height={500} width={480} />
        </div>
        <p className="text-white font tracking-[.09rem] my-[2rem]">
          Connect with customers directly through our apps
        </p>
        <div className="flex gap-[.3rem]">
          <div
            className="bg-[#325E9A]  border-none  rounded-[120px] h-[10px] w-[25px]"
            ref={oneRef}
          ></div>
          <div
            className="bg-white border-2 border-solid rounded-[120px] h-[9px] w-[9px]"
            ref={twoRef}
          ></div>
          <div
            className="bg-white border-2 border-solid rounded-[120px] h-[9px] w-[9px]"
            ref={threeRef}
          ></div>
        </div>
      </div>
    </div>
  );
}
