"use client";
import Left from "./left";
import Right from "./right";
import { useRef, useState } from "react";

export default function Home() {
  const logRef: any = useRef(null);
  const signRef: any = useRef(null);
  const otpRef: any = useRef(null);

  const [sign, setSign] = useState(false);
  const [otp, setOtp] = useState(false);

  const signIn = () => {
    setSign(true);
    console.log(sign);
  };
  const Otpappear = () => {
    setOtp(true);
  };
  console.log(sign);
  return (
    <main className=" bg-blue-800 flex h-screen items-center justify-between px-[13rem]   media" >
        <Left />
        <Right
          logRef={logRef}
          signRef={signRef}
          otpRef={otpRef}
          signIn={signIn}
          sign={sign}
          otp={otp}
          Otpappear={Otpappear}
      />
      
    </main>
    
  );
}
