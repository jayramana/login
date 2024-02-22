import React from "react";
import Image from "next/image";
import left from "./leftline.svg";
import google from "./Google.svg";
import info from "./info.svg";

export default function Right({logRef,signRef,otpRef,signIn,sign,otp,Otpappear}:{logRef:any,signRef:any,otpRef:any,signIn:any,sign:any,otp:any,Otpappear:any}) {
  return (
    <div>
      <div className={`h-screen flex flex-col justify-center w-full `} ref={logRef}>
        {/* Login */}
        <section className={`bg-[#F0EFEF] px-10 py-10 rounded-lg flex flex-col gap-5 visible ${sign ? "hidden" : "visible"}`}>
          <p className="title">Login</p>
          <form className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <label htmlFor="mail" className="font text-[14px]">Email Id</label>
              <input
                type="email"
                id="mail"
                className="border-2 border-solid border-black rounded-md w-full pl-4 pr-[9rem] py-2 focus:outline-none text-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="pass" className="font">Password</label>
              <input
                type="password"
                id="pass"
                className="border-2 border-solid border-black rounded-md pl-4 pr-22 py-2 text-sm"
                required
              />
            </div>
            <button
              className="bg-[#FF9300] text-white px-4 py-2 rounded-md focus:outline-none font "
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="flex justify-center gap-4">
            <Image src={left} alt="left" height={10} width={100} />
            <p className="font">or</p>
            <Image src={left} alt="right" height={10} width={100} />
          </div>
          <div className="flex border-2 border-solid border-black rounded-md justify-center gap-2 py-2">
            <Image src={google} alt="google" width={20} height={20} />
            <button>
              <p className="title">Sign In with Google</p>
            </button>
          </div>
          <div className="flex items-center justify-center gap-1 pointer" onClick={signIn}>
            <p className="font">Dont have an account ?</p>
            <p className="text-[#FF9300] font">Sign Up</p>
          </div>
        </section>
        {/* Login */}

        {/* Sign Up */}
        <section className={`bg-[#F0EFEF] px-10 py-9 rounded-lg flex flex-col gap-5  ${sign ? "visible" : "hidden"} ${otp ? "hidden" : "visible"} `} ref={signRef}>
          <p className="title">Sign Up</p>
          <form className="flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="flex flex-col gap-[.4rem]">
                <label htmlFor="" className="font font-[14px]">First Name</label>
                <input
                  type="text"
                  className="border-2 border-solid border-black rounded-md  pl-[.5rem]  py-2 focus:outline-none text-sm"
                  required
                />
              </div>
              <div className="flex flex-col gap-[.4rem]">
                <label htmlFor="" className="font font-[14px]">Last Name</label>
                <input
                  type="text"
                  className="border-2 border-solid border-black rounded-md  pl-4  py-2 focus:outline-none text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="mail" className="font font-[14px]">Email Id</label>
              <input
                type="email"
                id="mail"
                className="border-2 border-solid border-black rounded-md w-full pl-4 pr-[9rem] py-2 focus:outline-none text-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="num" className="font font-[14px]">Mobile Number</label>
              <input
                type="text"
                id="num"
                className="border-2 border-solid border-black rounded-md w-full pl-4 pr-[9rem] py-2 focus:outline-none text-sm"
                required
              />
            </div>
            <div className="flex  gap-3 items-center">
              <div className="flex flex-col gap-[.5rem]">
                <div className="flex gap-[.4rem]">
                  <label htmlFor="" className="font font-[14px]">Create Password</label>
                  <Image src={info} alt="info" height={20} width={20} />
                </div>
                <input
                  type="text"
                  className="border-2 border-solid border-black rounded-md  pl-[.5rem]  py-2 focus:outline-none text-sm"
                />
              </div>
              <div className="flex flex-col gap-[.5rem]">
                <label htmlFor="" className="font font-[14px]">Confirm Password</label>
                <input
                  type="text"
                  className="border-2 border-solid border-black rounded-md  pl-4  py-2 focus:outline-none text-sm"
                />
              </div>
            </div>
            <button
              className="bg-[#FF9300] text-white px-4 py-2 rounded-md focus:outline-none mt-[1rem] shadow-xl title"
              type="submit"
              onClick={Otpappear}
            >
              Sign Up
            </button>
          </form>
        </section>
        {/* Sign Up */}

        {/* OTP */}
        <section className={`bg-[#F0EFEF] px-10 py-[4rem] rounded-2xl flex flex-col gap-5  ${otp ? "visible" : "hidden"}`} ref={otpRef}>
          <p className="title">Verify your OTP</p>
          <p className="text-[12px] font tracking-[0.025rem]">Please enter the 6 digit OTP we have sent to your mobile number</p>
          <div className="flex gap-[2rem] justify-center">
            <input
              type="number"
              className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-[35px] h-[40px] rounded-md border-2 border-solid border-black px-.4rem focus:outline-[outline-otp]-700 outlne text-center"
            />
            <input
              type="number"
              className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-[35px] h-[40px] rounded-md border-2 border-solid border-black outlne text-center"
            />
            <input
              type="number"
              className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-[35px] h-[40px] rounded-md border-2 border-solid border-black outlne text-center"
            />
            <input
              type="number"
              className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-[35px] h-[40px] rounded-md border-2 border-solid border-black outlne text-center"
            />
            <input
              type="number"
              className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-[35px] h-[40px] rounded-md border-2 border-solid border-black outlne text-center"
            />
            <input
              type="number"
              className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-[35px] h-[40px] rounded-md border-2 border-solid border-black outlne  text-center"
            />
          </div>
          <button
              className="bg-[#FF9300] text-white px-4 py-2 rounded-md focus:outline-none mt-[1rem] shadow-xl text-[14px] title"
            type="submit"
            >
              Confirm OTP
          </button>
          <div className="flex gap-[.5rem] items-center justify-center">
            <p className="text-[14px] font font-[500]">Didn't Receive OTP ?</p>
            <p className=" text-[14px] title">Resend</p>
          </div>
        </section>

        {/* OTP */}
      </div>
    </div>
  );
}
