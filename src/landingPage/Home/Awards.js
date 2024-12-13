import React from "react";

const Awards = () => {
  return (
    <div className="w-full px-2 flex mt-20">
      <div className="w-[50%] p-20">
        <img src="media\images\largestBroker.svg" alt="" className="w-full" />
      </div>
      <div className="w-[50%] flex justify-center flex-col items-center">
          <h2 className="text-4xl font-semibold">Trust with confidence</h2>
        <div className="flex w-full justify-center gap-12 p-12 text-center">
        <ul className="list-disc">
          <li>Customer-first always</li>
          <li>The Zerodha universe</li>
          <li>No spam or gimmicks</li>
          <li>Do better with money</li>
        </ul>
        <ul className="list-disc">
          <li>No spam or gimmicks</li>
          <li>Customer-first always</li>
          <li>Do better with money</li>
          <li>The Zerodha universe</li>
        </ul>
        </div>
        <img src="media\images\pressLogos.png" alt="" className="w-[90%] " />
      </div>
    </div>
  );
};

export default Awards;
