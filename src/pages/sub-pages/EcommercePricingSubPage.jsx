import React from "react";
import EcommercePricing from "../../components/pricing-plane/Ecommerce";

const EcommercePricingSubPage = () => {
  return (
    <>
      <div className="grid grid-col-1 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-white">
        <div className="text-center">
          <span className="font-bold text-4xl text-gray-800 sm:text-3xl">
            What is E-Commerce website?
          </span>
          <div className="flex justify-center mt-6">
            <hr className="border-b-1 border-gray-500 w-[100px]" />
            <div className="w-[14px] h-[14px] bg-[yellow] rounded-sm relative top-[-7px] mx-3"></div>
            <hr className="border-b-1 border-gray-500 w-[100px]" />
          </div>
          <p className="text-justify px-2 mx-auto mt-2 text-gray-600 py-4 text-[14px] font-semibold tracking-tight lg:w-[50%] xl:w-[50%]">
            A static website is a website that consists of web pages with fixed
            content that does not change unless it is manually updated by a web
            developer or designer. Static Website are non editable pages. Means
            the user who will take static website will not able able to edit the
            website without any web design knowledge. As it required HTML, CSS
            and javascript coding to understand the changes. If you want content
            editable website then visit our Dynamic Website Packages. At apc web
            works, we are a static website design company in India provide
            various static website design packages as per your requirements and
            budget.
          </p>
        </div>

        <EcommercePricing />
      </div>
    </>
  );
};

export default EcommercePricingSubPage;
