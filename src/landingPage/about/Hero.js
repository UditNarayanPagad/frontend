import React from "react";

const Hero = () => {
  return (
    <div className="mt-16 px-20">
      <div className="py-24 leading-10 text-center flex justify-center text-3xl font-semibold">
        We pioneered the discount broking model in India. <br />
        Now, we are breaking ground with our technology.
      </div>
      <div className="py-24 border-t-[1px] border-t-zinc-200 flex">
        <div className="text-lg w-[40%] flex flex-col gap-3 mx-10">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="text-lg w-[40%] flex flex-col gap-3 mx-10">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a
              href=""
              className="text-blue-500 cursor-pointer hover:text-black"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a
              href=""
              className="text-blue-500 cursor-pointer hover:text-black"
            >
              blog
            </a>{" "}
            or see what the media is{" "}
            <a
              href=""
              className="text-blue-500 cursor-pointer hover:text-black"
            >
              {" "}
              saying about us
            </a>
            .
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-semibold text-center">People</h1>
      <div className="p-20 flex justify-center">
        <div className="w-[40%] flex justify-center items-center flex-col gap-3 ">
          <img
            src="media\images\nithinKamath.jpg"
            alt=""
            className="h-80 w-80 rounded-full"
          />
          <h2 className="text-xl">Nithin Kamath</h2>
          <p className="text-sm text-zinc-500">Founder, CEO</p>
        </div>
        <div className="w-[52%] text-base flex flex-col gap-3 mx-10">
          <p className="mt-10">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a
              href=""
              className="text-blue-500 cursor-pointer hover:text-black font-semibold"
            >
              Homepage
            </a> / <a
              href=""
              className="text-blue-500 cursor-pointer hover:text-black font-semibold"
            >
              TradingQnA
            </a> / <a
              href=""
              className="text-blue-500 cursor-pointer hover:text-black font-semibold"
            >
              Twitter
            </a></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
