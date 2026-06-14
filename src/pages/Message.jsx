import { EllipsisVertical, Mail, PhoneCall, Search, Send, Video } from "lucide-react";
import { chatList, chatDetails } from "@/components/common/ChatList";

const Message = () => {
  return (
    <div className="bg-white rounded-t-xl h-[90%] border-[#22242A] outline-t border-l border-r p-4">
      <h1 className="text-3xl font-bold">Messages & Inbox</h1>
      <p className="font-light mb-3">Client and team communications</p>
      <section className="w-full grid grid-cols-6 h-[75vh] gap-6">
        <div className="col-span-2 flex flex-col rounded-xl h-full">
          <div className="relative flex p-2 border border-white outline m-2 w-[95%] rounded-xl shrink-0">
            <Search className="absolute w-5 left-4 top-4" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-9 font-semibold w-[90%] pt-2 pb-2 outline-none text-xl"
            />
          </div>
          <div className="overflow-y-auto h-128">
            {chatList.map((chat, index) => (
              <div
                key={index}
                className={`${chat.isBg ? "bg-[#F9FEFF]" : "bg-white"} flex border p-2 m-2 rounded-xl items-center`}
              >
                <div>
                  <img
                    src={chat.image}
                    alt={chat.company}
                    className="w-12 rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-3xl">{chat.name}</h2>
                  <p className="font-light pb-2">{chat.company}</p>
                  <p className="text-2xl font-serif">{chat.message}</p>
                  <p className="font-light">{chat.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 border border-slate-100 rounded-xl flex flex-col h-[30%]">
          <div className="border-b border-b-slate-100 flex flex-row justify-between p-6 items-center">
            <div className="flex flex-row items-center gap-1">
              <div>
                <img
                  src="https://images.unsplash.com/vector-1738925788108-e8de5ef91533?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="John Anderson"
                  className="w-11 rounded-full border border-pink-400"
                />
              </div>
              <div className="leading-none">
                <h2 className="text-3xl">John Anderson</h2>
                <p className="font-extralight">TechCorp Industries</p>
              </div>
            </div>
            <div className="flex gap-4">
              <PhoneCall />
              <Video />
              <Mail />
              <EllipsisVertical />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-y-auto w-full flex flex-col p-2 gap-1 max-h-[60%]">
              {chatDetails.map((detail, index) => (
                <div
                  key={index}
                  className={`flex w-full ${detail.isSend ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`${detail.isSend ? "bg-[#C9DAF7]" : "bg-gray-100"} flex flex-col w-fit max-w-[70%] rounded-xl p-2`}
                  >
                    <p className="p-3">{detail.message}</p>
                    <span className="text-xs font-light self-end pr-2">
                      {detail.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center px-4 pt-2 pb-2 pl-4 pr-4 justify-between border-t border-slate-100">
              <input
                type="text"
                placeholder="Type something..."
                className="flex-1 outline-none text-base text-slate-700 placeholder:text-slate-400 bg-slate-50 rounded-full px-4 py-2 mr-3"
              />
              <Send className="text-slate-400 cursor-pointer hover:text-slate-600 shrink-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;