import PCNavbar from "./components/navbar/PCNavbar";
// import AppRoutes from "./routes";
import { IoIosArrowUp, IoMdAttach } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { LuX } from "react-icons/lu";
import { useEffect, useState } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";

function App() {
  const user = [
    { id: 1, avatar: "https://www.w3schools.com/howto/img_avatar.png" },
    { id: 2, avatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { id: 3, avatar: "https://www.w3schools.com/howto/img_avatar.png" },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulate loading messages from a server.
    const initialMessages = [
      { id: 1, username: "User1", text: "Hello!" },
      { id: 2, username: "User2", text: "Hi there!" },
    ];
    setMessages(initialMessages);
  }, []);

  return (
    <>
      {/* <AppRoutes /> */}
      <PCNavbar />
      <div
        className="w-14 h-14 bg-[yellow] rounded-full text-black  fixed hover:bg-[black] hover:text-[yellow] z-20 bottom-[55px] right-12 flex items-center justify-center cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <BsFillChatDotsFill className={`text-3xl`} />
      </div>

      <div className="w-12 h-12 bg-[black] rounded-full text-[yellow] fixed hover:bg-[yellow] hover:drop-shadow-lg hover:border-black hover:text-[black] z-10 bottom-6 right-6 flex items-center justify-center cursor-pointer">
        <IoIosArrowUp className="text-2xl" />
      </div>

      {isDialogOpen && (
        <div className="flex flex-col justify-center fixed top-[300px] right-[75px] rounded-xl w-[370px] overflow-hidden sm:w-full sm:left-0">
          <div className="p-2 py-3 flex flex-row items-center bg-gradient-to-r from-[yellow] to-[green] w-full">
            {user?.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className={`w-[40px] h-[40px] rounded-[100%] overflow-hidden border-white border-2 flex justify-center items-center ${
                    item.id === 2 && "relative right-5 bg-violet-300"
                  } ${item.id === 3 && "relative right-10 bg-yellow-300"}`}
                >
                  <img
                    src={item.avatar}
                    className="w-full"
                    title="Avatar"
                    alt="Avatar"
                  />
                </div>
              );
            })}
            <div className="flex flex-col items-center text-black">
              <span className="text-lg ml-[-35px] font-bold -tracking-wider relative top-[-3px]">
                <sup>a</sup>pc web works
              </span>
              <p className=" font-bold relative top-[-8px] left-[-26px] text-sm">
                chat with us
              </p>
            </div>
            <div className="flex items-center justify-center ml-[120px] ">
              <LuX
                className={`${
                  !isDialogOpen || "block"
                } font-bold text-xl text-black cursor-pointer`}
                onClick={() => setIsDialogOpen(false)}
              />
            </div>
          </div>
          <div className="p-2 bg-green-100 flex flex-row">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src={user[1].avatar} alt="Avtar" />
            </div>
            <div className="text-sm ml-3 text-black flex flex-col ">
              {messages?.map((message, index) => (
                <span
                  key={index}
                  className="py-[4px] px-4 mb-1 rounded-e-lg rounded-t-lg list-none bg-green-300"
                >
                  {message.text}
                </span>
              ))}
            </div>
          </div>
          <div className="p-2 py-6 border-t-2 bg-white">
            <input
              className="w-[85%] p-1 px-2 outline-none border-none bg-white"
              placeholder="Enter your message"
              type="text"
              title="chat with us"
            />
            <div className="w-[22%] flex justify-between py-2 text-gray-400">
              <div className="w-[35px] h-[35px] hover:bg-purple rounded-full flex items-center justify-center">
                <IoMdAttach
                  className="text-2xl"
                  title="Upload file"
                  type="file"
                />
                {/* <input type="file"/> */}
              </div>
              <div className="w-[35px] h-[35px] hover:bg-gray-50 rounded-full flex items-center justify-center">
                <HiOutlineEmojiHappy className="text-2xl" title="Upload file" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
