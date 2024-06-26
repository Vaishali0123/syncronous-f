import React from "react";
import Icon from "../../assets/Icon.png";
import assign from "../../assets/assign.png";
import arrow from "../../assets/arrow.png";
import pic from "../../assets/pic.png";
import Image from "next/image";

function Addteamtask({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-opacity-50 bg-gray-800">
      <div className="bg-white rounded-xl  w-[60%] flex-col sm:flex-row h-[60%] flex justify-evenly items-center ">
        <div className=" p-2 flex flex-col justify-evenly items-center sm:w-[58%] w-full h-[95%] rounded-xl">
          <div className="flex flex-row  h-[8%] justify-between  w-[90%]">
            <div className="text-[16px] text-black flex items-center h-[100%] font-semibold ">
              Add New Task
            </div>
            {/* Add your form or other content here */}
           
          </div>
          <input
            className="p-2 bg-[#FFFBF3] outline-none h-[65%] flex items-start justify-start w-[95%] overflow-auto border-2 rounded-xl border-[#FFC248]"
            placeholder="What is the task?"
          />
         
        </div>
        <div className="shadow-xl flex flex-col justify-evenly items-center sm:w-[38%] w-full h-[90%]  rounded-xl">
          {/* Assigning task options */}
          <div className="flex flex-row  h-[8%] justify-between items-center w-[95%]">
            {/* <div className="flex flex-row h-[100%] items-center  w-[45%] justify-between">
              <Image
                src={assign}
                className="h-[25px] w-[25px] object-contain"
              />
              <div className="text-[16px] text-black flex items-center h-[100%] font-semibold ">
                Assign task to
              </div>
            </div> */}
            <div className="w-[90%] px-2 h-[40px]  flex flex-row rounded-full bg-[#FFF8EB] items-center ">
              <Image
                src={assign}
                className="h-[25px] w-[25px] object-contain"
              />
              <input
                className=" mx-3 text-[#121212] text-[14px] bg-[#FFF8EB] outline-none"
                placeholder="Search member to assign a task"
              />
            </div>
            {/* Add your form or other content here */}
          
          </div>

          {/* People */}
          <div className="p-2 bg-white h-[65%] flex flex-col  items-center w-[95%] overflow-auto rounded-xl [#FFC248]">
            
            <div className="w-[98%] my-2 px-2 border-b-[1px] border-[#f1f1f1] h-[40px]  flex flex-row items-center ">
              <Image src={pic} className="h-[35px] w-[35px] object-contain" />
              <div className=" mx-3  w-[40%] text-[#121212] text-[14px]  outline-none">
                Rosie Gray
              </div>
              <div className=" text-[#444444] text-[13px]  outline-none">
                16 task on progress
              </div>
            </div>
            <div className="w-[98%] my-2 px-2 border-b-[1px] border-[#f1f1f1] h-[40px] overflow-x-scroll scrollbar-hide  flex flex-row items-center ">
              <Image src={pic} className="h-[35px] w-[35px] object-contain" />
              <div className=" mx-3  w-[40%] text-[#121212] text-[14px]  outline-none">
                Rosie Gray
              </div>
              <div className=" text-[#444444] text-[13px]  outline-none">
                16 task on progress
              </div>
            </div> <div className="w-[98%] my-2 px-2 border-b-[1px] border-[#f1f1f1] h-[40px]  flex flex-row items-center ">
              <Image src={pic} className="h-[35px] w-[35px] object-contain" />
              <div className=" mx-3  w-[40%] text-[#121212] text-[14px]  outline-none">
                Rosie Gray
              </div>
              <div className=" text-[#444444] text-[13px]  outline-none">
                16 task on progress
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-[90%] h-[10%]">
            <div
              onClick={onClose}
              className="w-[50%] flex justify-center items-center text-black text-[14px] font-semibold h-[100%] bg-white rounded-3xl"
            >
              Cancel
            </div>
            <div className="w-[50%] flex justify-center items-center text-black text-[14px] font-semibold h-[100%] bg-[#FFC248] rounded-3xl">
              Save Task
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addteamtask;
