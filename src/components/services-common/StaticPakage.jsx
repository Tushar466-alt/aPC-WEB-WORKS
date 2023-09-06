import React from "react";
import PCPricing from "../PCPricing";

const StaticPakage = () => {
  return (
    <div>
      <div className="grid grid-rows-2 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-green-100">
        <div className="text-center">
          <span className="font-bold text-4xl text-gray-800 sm:text-3xl">
            What is static website?
          </span>
          <div className="flex justify-center mt-6">
            <hr className="border-b-1 border-gray-500 w-[100px]" />
            <div className="w-[14px] h-[14px] bg-[yellow] rounded-sm relative top-[-7px] mx-3"></div>
            <hr className="border-b-1 border-gray-500 w-[100px]" />
          </div>
          <p className="px-2 mx-auto mt-2 text-gray-600 py-4 text-[14px] font-semibold tracking-tight lg:w-[50%] xl:w-[50%]">
            A static website is a website that consists of web pages with fixed
            content that does not change unless it is manually updated by a web
            developer or designer. Static Website are non editable pages. Means
            the user who will take static website will not able able to edit the
            website without any web design knowledge. As it required HTML, CSS
            and javascript coding to understand the changes. If you want content
            editable website then visit our Dynamic Website Packages. At FODUU,
            we are a static website design company in India provide various
            static website design packages as per your requirements and budget.
          </p>
        </div>

        <span className="font-bold text-4xl text-gray-800 sm:text-3xl text-center mt-14">
          Cost of Static Website Design
        </span>

        <table className="border border-gray-400 border-t-[red] border-collapse table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300 text-left">Packeges</th>
              <th className="border border-slate-300">Basic</th>
              <th className="border border-slate-300">Corporate</th>
              <th className="border border-slate-300">Creative</th>
              <th className="border border-slate-300">Extra Creative</th>
            </tr>
          </thead>

          <thead>
            <tr>
              <th className="border border-slate-300 text-left">Price</th>
              <th className="border border-slate-300">2999/-</th>
              <th className="border border-slate-300">4999/-</th>
              <th className="border border-slate-300">19999/-</th>
              <th className="border border-slate-300">29999/-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 text-left" colSpan="5">-</td>
            </tr>
            <tr>
              <td className="border border-slate-300 text-left">-</td>
              <td className="border border-slate-300">-</td>
              <td className="border border-slate-300">-</td>
              <td className="border border-slate-300">-</td>
              <td className="border border-slate-300">-</td>
            </tr>
            <tr>
              <td className="border border-slate-300 text-left">
                Witchy Woman
              </td>
              <td className="border border-slate-300">The Eagles</td>
              <td className="border border-slate-300">1972</td>
              <td className="border border-slate-300">1972</td>
              <td className="border border-slate-300">1972</td>
            </tr>
            <tr>
              <td className="border border-slate-300 text-left">
                Shining Star
              </td>
              <td className="border border-slate-300">Earth, Wind, and Fire</td>
              <td className="border border-slate-300">1975</td>
              <td className="border border-slate-300">1975</td>
              <td className="border border-slate-300">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaticPakage;
