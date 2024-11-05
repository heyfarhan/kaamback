import React from "react";
import { ImAttachment } from "react-icons/im";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiCamera } from "react-icons/fi";
import { IoMic } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";

const JobSeekerMessages: React.FC = () => {
  return (
    <div className="p-5 flex gap-5 h-full overflow-hidden">
      <div className="flex flex-col gap-5 w-3/6">
        <div className="flex bg-white items-center rounded-lg w-full">
          <FiSearch className="text-5xl cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] h-full rounded-l-lg px-2 " />
          <input type="text" placeholder="Search here..." className="rounded-r-lg border-none  w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
        </div>
        <div className="p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white rounded-lg flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Groups</h3>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-3">
              <p className="h-10 w-10 bg-[#041893] rounded-full flex items-center justify-center text-white">
                logo
              </p>
              <p>
                <p>HCL</p>
                <p className="text-sm">Great work</p>
              </p>
            </span>
            <p className="text-sm text-gray-500">Today, 9:52 p.m.</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-3">
              <p className="h-10 w-10 bg-[#041893] rounded-full flex items-center justify-center text-white">
                logo
              </p>
              <p>
                <p>HCL</p>
                <p className="text-sm">Great work</p>
              </p>
            </span>
            <p className="text-sm text-gray-500">Today, 9:52 p.m.</p>
          </div>
        </div>

        <div className="p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white rounded-lg  flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-3">People</h3>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-3">
              <p className="h-10 w-10 bg-[#041893] rounded-full flex items-center justify-center text-white">
                logo
              </p>
              <p>
                <p>Anil</p>
                <p className="text-sm">Happy Birthday</p>
              </p>
            </span>
            <p className="text-sm text-gray-500">Today, 8:52 p.m.</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-3">
              <p className="h-10 w-10 bg-[#041893] rounded-full flex items-center justify-center text-white">
                logo
              </p>
              <p>
                <p>Anil</p>
                <p className="text-sm">Happy Birthday</p>
              </p>
            </span>
            <p className="text-sm text-gray-500">Today, 8:52 p.m.</p>
          </div>
        </div>
      </div>
      <div className="relative p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white rounded-lg w-full flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <span className="h-10 w-10 bg-[#041893] rounded-full flex items-center justify-center text-white">
            Logo
          </span>
          <p className="text-lg font-semibold">
            Anil
            <p className="text-gray-500 text-sm">
              Online - Last seen, 2:02 p.m.
            </p>
          </p>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-3 overflow-y-scroll h-[80%]">
            {/* sender div */}
            <span className="p-2 px-4 bg-gray-200 rounded-3xl w-[48%]">
              Hey There! How are you Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi ipsam Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi ipsam possimus, deleniti
              facilis ratione ab eum at, qui laudantium labore, odio accusamus
              omnis! Architecto incidunt officia vero, inventore voluptatum
              quibusdam.
            </span>
            {/* receiver div */}
            <div className="w-full flex flex-row-reverse ">
              <span className="p-2 px-4 bg-[#041893] text-white rounded-3xl w-[48%]">
                Hi, I am fine. How are you? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi ipsam possimus, deleniti
                facilis ratione ab eum at, qui laudantium labore, odio accusamus
                omnis! Architecto incidunt officia vero, inventore voluptatum
                quibusdam.
              </span>
            </div>
            <span className="p-2 px-4 bg-gray-200 rounded-3xl w-[48%]">
              Hey There! How are you Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi ipsam Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi ipsam possimus, deleniti
              facilis ratione ab eum at, qui laudantium labore, odio accusamus
              omnis! Architecto incidunt officia vero, inventore voluptatum
              quibusdam.
            </span>
          </div>
          <div className="flex items-center w-full absolute bottom-0 mb-4 pr-10">
            <div className="flex items-center gap-5 bg-blue-100 p-2 px-5 rounded-3xl w-full">
              <ImAttachment className="text-3xl cursor-pointer" />
              <input
                type="text"
                placeholder="Type your message here..."
                className="rounded-lg  w-full bg-transparent"
              />
              <MdOutlineEmojiEmotions className="text-3xl cursor-pointer" />
              <FiCamera className="text-3xl cursor-pointer" />
              <IoMdSend className="text-3xl cursor-pointer" />
            </div>
            <div className="cursor-pointer bg-[#041893] p-2 mx-2 text-white rounded-full">
              <IoMic className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerMessages;
