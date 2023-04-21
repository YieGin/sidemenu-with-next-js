"use client";
import Image from "next/image";
import React, { useState } from "react";
import Arrow from "./icons/1.svg";
import logo from "./icons/logo.svg";
import SidebarList from "./SidebarList";
import TeamsList from "./TeamsList";
function Sidebar() {
  const [Click, setClick] = useState(false);
  const [move, setMove] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handelClick = () => {
    setClick(!Click);
    setMove(!move);
  };

  return (
    <div
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      className="flex flex-col"
    >
      <div className="flex items-center justify-between relative pl-2">
        <div
          className={
            "pt-5 pr-2 justify-between " +
            (Click ? "w-32 duration-500" : "w-80 duration-500")
          }
        >
          <div className="h-20">
            <Image className="w-10 h-10" src={logo} />
          </div>
          <div className="flex justify-between w-[100%]">
            <>
              <SidebarList Click={Click} move={move} />
            </>
            {isCollapsible && (
              <button
                className={Click ? "rotate-180" : "0"}
                onClick={handelClick}
              >
                <Image className={Click ? "w-6 h-6" : "w-5 h-5"} src={Arrow} />
              </button>
            )}
          </div>
          <p className="mt-20 text-[20px]">Your teams</p>
          <TeamsList move={move} Click={Click} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
