import React from "react";
import PCPricing from "../Pricing";

const StaticPakage = () => {
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

  return (
    <div>
      <div className="grid grid-col-1 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-white">
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
        <hr className="border-[2px] border-[yellow] mt-8" />
        <span className="font-bold text-4xl text-gray-800 sm:text-3xl text-center mt-10">
          Cost of Static Website Design
        </span>

        <table className="border border-gray-400 border-t-[red] border-collapse table-auto text-center mt-10">
          <thead>
            <tr className="bg-[#ffff0023]">
              <th className="border border-gray-200 text-left py-3 px-2">Packeges</th>
              <th className="border border-gray-200">Basic</th>
              <th className="border border-gray-200">Corporate</th>
              <th className="border border-gray-200">Creative</th>
              <th className="border border-gray-200">Extra Creative</th>
            </tr>
          </thead>

          <thead>
            <tr>
              <th className="border border-gray-200 text-left py-3 px-2">Price</th>
              <th className="border border-gray-200">2999/-</th>
              <th className="border border-gray-200">4999/-</th>
              <th className="border border-gray-200">19999/-</th>
              <th className="border border-gray-200">29999/-</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[yellow]">
              <th className="border border-gray-200 text-left py-4 px-2" colSpan="5">
                <span>Get started easily</span>
              </th>
            </tr>
            {formData?.map((item, ind) => {
              return (
                <tr key={ind} className="font-medium text-xs">
                  <td className="border border-gray-200 text-left py-3 px-2">
                    {item.title}
                  </td>
                  <td className="border border-gray-200">{item.basic}</td>
                  <td className="border border-gray-200">{item.corporate}</td>
                  <td className="border border-gray-200">{item.creative}</td>
                  <td className="border border-gray-200">
                    {item.extraCreative}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaticPakage;
