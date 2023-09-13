import React, { useState } from "react";
import axios from "axios";
import Textarea from "../../../Utilities/Textarea";
import Input from "../../../Utilities/Input";
import Button from "../../../Utilities/Button";
import spinner from "../../../img/contactUs/spiner.gif";
import Components from "../../comman/Components";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  let [empty, setEmpty] = useState(false);
  let [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (name.length === 0 || email.length === 0) {
        setLoading(false);
        setEmpty(true);
      } else {
        setEmpty(false);
        let data = {
          name: name,
          email: email,
          subject: subject,
          message: message,
        };
        const res = await axios.post(`/contact`, data);
        if (res.status === 200) {
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setLoading(false);
        }
      }
    } catch (errr) {}
  };

  return (
    <>
      <Components className="bg-[white]">
        <div className="text-center">
          <span className="font-bold text-4xl text-gray-500 sm:text-3xl">
            Contact Us
          </span>
          <p className="px-2 mx-auto mt-2 text-gray-500 py-4 text-[14px] font-semibold tracking-tight lg:w-[50%] xl:w-[50%]">
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
        </div>
        <form onSubmit={submitForm}>
          <div className="sm:px-0 sm:py-0 md:px-0 md:py-0 mt-5">
            <div className="flex flex-col space-y-3 sm:mx-10  md:mx-10 text-gray-400 text-sm">
              <div className="flex-1 flex space-x-20 sm:flex-col  sm:space-x-0 sm:space-y-5 md:flex-col  md:space-x-0 md:space-y-5">
                <div className="w-full">
                  <Input
                    className={
                      "mt-2 py-3 text-left  border-2 focus:border-l-8 focus:border-[#ff5733] border-gray-200 outline-[#ff5733] transition-all duration-500"
                    }
                    type={"text"}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    label={"Your Name(required)"}
                  />
                  {empty && (
                    <p className="text-left text-red-600">this is required*</p>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    className={
                      "mt-2 py-3  text-left  border-2 focus:border-l-8 focus:border-[#ff5733] border-gray-200 outline-[#ff5733] transition-all duration-500"
                    }
                    type={"email"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label={"Your Email(required)"}
                  />
                  {empty && (
                    <p className="text-left text-red-600">this is required*</p>
                  )}
                </div>

                <Input
                  className={
                    "mt-2 py-3 text-left  border-2 focus:border-l-8 focus:border-[#ff5733] border-gray-200 outline-[#ff5733] transition-all duration-500"
                  }
                  type={"text"}
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  label={"Subject"}
                />
              </div>
              <div>
                <Textarea
                  className={
                    "mt-2 py-3 p-2   border-2 text-left focus:border-l-8 focus:border-[#ff5733] border-gray-200 outline-[#ff5733] transition-all duration-500"
                  }
                  type={"text"}
                  value={message}
                  rows="4"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  label={"Your Message"}
                />
              </div>
              <div className="flex  justify-center">
                <Button
                  className={
                    "mt-4 border-2 bg-[#ff5733] px-14 py-3 hover:bg-[#ff5833ac] text-white"
                  }
                  type={"submit"}
                  onClick={() => {}}
                >
                  send
                </Button>
                {loading && (
                  <div className="px-2">
                    <img className="h-8" src={spinner}></img>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </Components>
    </>
  );
}

export default ContactUs;
