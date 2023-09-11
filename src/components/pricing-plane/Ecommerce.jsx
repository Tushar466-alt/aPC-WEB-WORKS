import React from "react";
import Components from "../comman/Components"

const EcommercePricing = () => {
  let formData = [
    {
      id: 1,
      title: "Home Page",
      basic: "✔",
      corporate: "✔",
      creative: "✔",
      extraCreative: "✔",
    },
    {
      id: 2,
      title: "Number of Pages",
      basic: "5",
      corporate: "7",
      creative: "15",
      extraCreative: "20",
    },
    {
      id: 3,
      title: "Design Quality",
      basic: "Basic",
      corporate: "Business",
      creative: "Creative",
      extraCreative: "Extra Creative",
    },
    {
      id: 4,
      title: "Navigation system",
      basic: "✔",
      corporate: "✔",
      creative: "✔",
      extraCreative: "✔",
    },
    {
      id: 5,
      title: "Domain",
      basic: "-",
      corporate: "Domain(.in)",
      creative: "Domain(.com)",
      extraCreative: "Domain (.com/.in/.net/.org)",
    },
    {
      id: 6,
      title: "Web space (Free for 1 year)",
      basic: "-",
      corporate: "300MB",
      creative: "500MB",
      extraCreative: "700MB",
    },
    {
      id: 7,
      title: "Number of Email Id",
      basic: "-",
      corporate: "1",
      creative: "2",
      extraCreative: "5",
    },
    {
      id: 8,
      title: "Inquiry Page",
      basic: "1",
      corporate: "1",
      creative: "1",
      extraCreative: "1",
    },
    {
      id: 9,
      title: "Mobile Tablet friendly",
      basic: "-",
      corporate: "✔",
      creative: "✔",
      extraCreative: "✔",
    },
    {
      id: 10,
      title: "Social media link integration",
      basic: "-",
      corporate: "-",
      creative: "✔",
      extraCreative: "✔",
    },
    {
      id: 11,
      title: "Google Map integration",
      basic: "-",
      corporate: "-",
      creative: "✔",
      extraCreative: "✔",
    },
    {
      id: 12,
      title: "Live chat integration",
      basic: "-",
      corporate: "-",
      creative: "-",
      extraCreative: "✔",
    },
    {
      id: 13,
      title: "Whatsapp integration",
      basic: "-",
      corporate: "-",
      creative: "-",
      extraCreative: "✔",
    },
    {
      id: 14,
      title: "Extra Pages",
      basic: "Rs.500 for Each page",
      corporate: "Rs.500 for Each page",
      creative: "Rs.500 for Each page",
      extraCreative: "Rs.500 for Each page",
    },
    {
      id: 15,
      title: "SSL",
      basic: "-",
      corporate: "-",
      creative: "-",
      extraCreative: "✔",
    },
  ];

  const tab = ["basic", "Corporate", "Creative", "Extra Creative"];
  // const filteredData = formData.filter((item) => item === selectedTab);
  return (
    <>
      <Components className="text-center">
      <span className="font-bold text-3xl text-gray-800 sm:text-xl text-center mt-10">
        Cost of E-Commerce Website Design
      </span>

      <div className="mt-10">
        <PackageTabButtonFormat className="" tab={tab} />
      </div>

      <table className="border border-gray-400 border-collapse table-auto text-center mt-1 w-full">
        <PackageTabTableFormat tab={tab} />

        <thead className="border sm:border-t-2">
          <tr>
            <th className="border border-gray-200 text-left py-3 px-2">
              Price
            </th>
            <th className="border border-gray-200">2999/-</th>
            <th className="border border-gray-200 sm:hidden md:hidden">
              4999/-
            </th>
            <th className="border border-gray-200 sm:hidden md:hidden">
              19999/-
            </th>
            <th className="border border-gray-200 sm:hidden md:hidden">
              29999/-
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[yellow]">
            <th
              className="border border-gray-200 text-left py-4 px-2"
              colSpan="5"
            >
              <span>Get started easily</span>
            </th>
          </tr>
          {formData?.map((item, ind) => {
            return (
              <tr key={ind} className="font-medium text-xs hover:bg-gray-100">
                <td className="border border-gray-200 text-left py-3 px-2">
                  {item.title}
                </td>
                <td className="border border-gray-200">{item.basic}</td>
                <td className="border border-gray-200 sm:hidden md:hidden">
                  {item.corporate}
                </td>
                <td className="border border-gray-200 sm:hidden md:hidden">
                  {item.creative}
                </td>
                <td className="border border-gray-200 sm:hidden md:hidden">
                  {item.extraCreative}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </Components>
    </>
  );
};

let PackageTabTableFormat = ({ tab }) => {
  return (
    <>
      <thead className="sm:hidden">
        <tr className="bg-[#ffff0023]">
          <th className="border border-gray-200 text-left py-3 px-2 sm:hidden lg:w-[25%] zl:w-[25%]">
            Packeges
          </th>
          {tab?.map((item, ind) => {
            return (
              <th className="border border-gray-200 sm:w-[25%] md:w-[25%] w-[15%] sm:text-sm sm:py-1">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

let PackageTabButtonFormat = ({ tab }) => {
  return (
    <>
      <div className="flex justify-between lg:hidden xl:hidden ">
        {tab?.map((item, ind) => {
          return (
            <button className="bg-gray-300 py-[3px] sm:w-[25%] md:w-[25%] w-[15%] font-bold">
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default EcommercePricing;
