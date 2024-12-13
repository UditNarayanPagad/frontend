import React, { useState } from "react";

const Brokerage = () => {
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  const handleClick = (click) => {
    setFirst(click === "equity");
    setSecond(click === "currency");
    setThird(click === "commodity");
  };
  

  return (
    <div className="mx-10">
      <div className=" flex border-b-[1.5px] border-zinc-200 mb-4">
        <h1 onClick={()=>handleClick("equity")} style={{borderBottom: first ? `2px solid blue` : `0px` }} className="text-3xl py-2 font-semibold w-[15%] hover:text-black text-blue-500 cursor-pointer text-center ">Equity</h1>
        <h1 onClick={()=>handleClick("currency")} style={{borderBottom: second ? `2px solid blue` : `0px` }} className="text-3xl font-semibold w-[15%] hover:text-black text-blue-500 cursor-pointer text-center ">Currency</h1>
        <h1 onClick={()=>handleClick("commodity")} style={{borderBottom: third ? `2px solid blue` : `0px` }} className="text-3xl font-semibold w-[15%] hover:text-black text-blue-500 cursor-pointer text-center ">Commodity</h1>
      </div>

      <div style={{display: first ? `block` : `none` }} className="first">
        <table className="table-auto border-[1.5px] border-zinc-200">
          <thead className="border-[1.5px] border-zinc-200">
            <tr>
              <td> </td>
              <td className="w-[20%] px-3 text-base font-semibold p-2">
                Equity delivery
              </td>
              <td className="w-[20%] px-3 text-base font-semibold p-2">
                Equity intraday
              </td>
              <td className="w-[20%] px-3 text-base font-semibold p-2">
                F&O - Futures
              </td>
              <td className="w-[20%] px-3 text-base font-semibold p-2">
                F&O - Options
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[20%] p-3 text-sm ">Brokerage</td>
              <td className="w-[20%] p-3 text-sm ">Zero Brokerage</td>{" "}
              <td className="w-[20%] ">
                0.03% or Rs. 20/executed order whichever is lower{" "}
              </td>{" "}
              <td className="w-[20%] p-3 text-sm ">
                0.03% or Rs. 20/executed order whichever is lower
              </td>{" "}
              <td className="w-[20%] p-3 text-sm">Flat Rs. 20 per executed order </td>
            </tr>
            <tr>
              <td className="w-[20%] p-3 text-sm ">STT/CTT</td>
              <td className="w-[20%] p-3 text-sm ">0.1% on buy & sell</td>{" "}
              <td className="w-[20%] p-3 text-sm ">
              0.025% on the sell side
              </td>{" "}
              <td className="w-[20%] p-3 text-sm ">
              0.02% on the sell side
              </td>{" "}
              <td className="w-[20%] p-3 text-sm ">
                <ul className="list-disc">
                  <li>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>{" "}
              </td>
            </tr>
            <tr>
              <td className="w-[20%] p-3 text-sm ">GST</td>
              <td className="w-[20%] p-3 text-sm ">18% on (brokerage + SEBI charges + transaction charges)</td>{" "}
              <td className="w-[20%] ">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>{" "}
              <td className="w-[20%] p-3 text-sm ">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>{" "}
              <td className="w-[20%] p-3 text-sm">18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{display: second ? `block` : `none` }} className="scnd">
        <table className="table-auto border-[1.5px] border-zinc-200 w-full">
        <thead className="border-[1.5px] border-zinc-200">
            <tr>
              <td className="w-[20%] px-3 text-base font-semibold p-2"> </td>
              <td className="w-[40%] px-3 text-base font-semibold p-2">
              Currency futures
              </td>
              <td className="w-[40%] px-3 text-base font-semibold p-2">
              Currency options
              </td>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="w-[20%] px-3 p-2">Brokerage </td>
              <td className="w-[40%] px-3 p-2">
              0.03% or ₹ 20/executed order whichever is lower
              </td>
              <td className="w-[40%] px-3 p-2">
              ₹ 20/executed order
              </td>
            </tr>
          <tr>
              <td className="w-[20%] px-3 p-2">STT/CTT </td>
              <td className="w-[40%] px-3 p-2">
              No STT
              </td>
              <td className="w-[40%] px-3 p-2">
              No STT
              </td>
            </tr>
          <tr>
              <td className="w-[20%] px-3 p-2">GST</td>
              <td className="w-[40%] px-3 p-2">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="w-[40%] px-3 p-2">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{display: third ? `block` : `none` }} className="third">
      <table className="table-auto border-[1.5px] border-zinc-200 w-full">
        <thead className="border-[1.5px] border-zinc-200">
            <tr>
              <td className="w-[20%] px-3 text-base font-semibold p-2"> </td>
              <td className="w-[40%] px-3 text-base font-semibold p-2">
              Commodity futures
              </td>
              <td className="w-[40%] px-3 text-base font-semibold p-2">
              Commodity options
              </td>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="w-[20%] px-3 p-2">Brokerage </td>
              <td className="w-[40%] px-3 p-2">
              0.03% or ₹ 20/executed order whichever is lower
              </td>
              <td className="w-[40%] px-3 p-2">
              ₹ 20/executed order
              </td>
            </tr>
          <tr>
              <td className="w-[20%] px-3 p-2">STT/CTT </td>
              <td className="w-[40%] px-3 p-2">
              0.01% on sell side (Non-Agri)
              </td>
              <td className="w-[40%] px-3 p-2">
              0.05% on sell side
              </td>
            </tr>
          <tr>
              <td className="w-[20%] px-3 p-2">GST</td>
              <td className="w-[40%] px-3 p-2">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="w-[40%] px-3 p-2">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-xl text-center py-10"><a href="" className="text-blue-500 font-semibold">Calculate your costs upfront</a> using our brokerage calculator</h2>
      <div>
        <h2 className="text-2xl my-4 font-semibold">Charges for account opening</h2>
        <table className="border-[1.5px] border-zinc-200 w-full mb-10">
          <thead className="border-[1.5px] border-zinc-200">
            <tr>
              <td className="w-[80%] px-3 text-base font-semibold p-2">Type of account</td>
              <td className="w-[20%] px-3 text-base font-semibold p-2">Charges</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 text-sm">Online account</td>
              <td className="p-3 text-sm"><p className="px-2 py-1 bg-green-600 text-white w-11">Free</p></td>
            </tr>
            <tr>
              <td className="p-3 text-sm">Offline account</td>
              <td className="p-3 text-sm"><p className="px-2 py-1 bg-green-600 text-white w-11">Free</p></td>
            </tr>
            <tr>
              <td className="p-3 text-sm">NRI account (offline only)</td>
              <td className="p-3 text-sm">&#8377; 500</td>
            </tr>
            <tr>
              <td className="p-3 text-sm">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td className="p-3 text-sm">&#8377; 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Brokerage;
