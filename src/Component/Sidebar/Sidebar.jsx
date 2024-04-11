import React, { useState } from "react";
import "./Sidebar.css";
import { useRef } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { IoIosArrowDown, IoIosArrowUp, IoIosPeople, IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { RiBook2Line } from "react-icons/ri";
import { IoReturnUpBack } from "react-icons/io5";
import { CgProductHunt } from "react-icons/cg";
import { BiTransferAlt } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar } from "primereact/accordion";
import { PiListDashes } from "react-icons/pi";
import { Badge } from "primereact/accordion";
import { Header } from "../Header/Header";
import Account from "../Common/Account";
import Profile from "../../Pages/Profile/Profile";

export const Sidebar = () => {
    const [activeIndex , setActiveIndex] = useState(false)
    const [toggle , setToggle] = useState(true)

    const handleOPen =()=>{
      
    }
  return (
    <div className="main w-100 ">
  <div className="d-flex" >
  <div className={`sidebar_section ${toggle ? 'open' : "close"}`}>
        <div className="logo px-4 py-4 d-flex justify-content-between align-items-center gap-2">
          <img src="/images/logo.png" className="w-50" />
        </div>
        <div className="sidebar_items">
          <NavLink to={"/home"}>
            <div className="navitems d-flex gap-2">
              <MdOutlineSpaceDashboard />
              Dashborad
            </div>
          </NavLink>
          {/* <NavLink>
                    <div className="navitems d-flex gap-2">
                    <CgProductHunt />
                        Products
                    </div>
                </NavLink> */}
          <div className="accordianNav">
            <Accordion>
              <AccordionTab
              onClick={() => {
                setActiveIndex(!activeIndex);
              }}
                header={
                    
                  <span className="d-flex align-items-center gap-2 w-full navitems">
                     
                    <CgProductHunt />
                    Products
                    {activeIndex ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                  </span>
                  
                }
              >
                <NavLink>
                  <div className="navitems d-flex gap-2 ">
                    <FaRegCircleDot />
                    Purchase List
                  </div>
                </NavLink>
                <NavLink>
                  <div className="navitems d-flex gap-2">
                    <FaRegCircleDot />
                    Add Purchase
                  </div>
                </NavLink>
                <NavLink>
                  <div className="navitems d-flex gap-2">
                    <FaRegCircleDot />
                    Import Purchase
                  </div>
                </NavLink>
              </AccordionTab>
            </Accordion>
          </div>
          <NavLink to={"/post"}>
            <div className="navitems d-flex gap-2">
              <FcSalesPerformance />
              Posts
            </div>
          </NavLink>
          <NavLink>
            <div className="navitems d-flex gap-2">
              <RiBook2Line />
              Purchase
            </div>
          </NavLink>
          <NavLink>
            <div className="navitems d-flex gap-2">
              <MdOutlineSpaceDashboard />
              Expenses
            </div>
          </NavLink>
          <NavLink>
            <div className="navitems d-flex gap-2">
              <CiShoppingCart />
              Quotation
            </div>
          </NavLink>
          <NavLink>
            <div className="navitems d-flex gap-2">
              <BiTransferAlt />
              Transfer
            </div>
          </NavLink>
          <NavLink>
            <div className="navitems d-flex gap-2">
              <IoReturnUpBack />
              Return
            </div>
          </NavLink>
          <NavLink>
            <div className="navitems d-flex gap-2">
              <IoIosPeople />
              People
            </div>
          </NavLink>
        </div>
      </div>
   
      <div className="Right_section w-100">
      <div className={`top_bar_section d-flex align-items-center justify-content-between  `}>
      <div className="d-flex justify-content-between w-100  py-3 px-5">
      <div><PiListDashes size={30}  onClick={()=>setToggle(!toggle)}/></div>

                <ul className="d-flex gap-3 mb-0 align-items-center">
                    <li>
                    <IoIosSearch size={28} />
                    </li>
                    <li>
                    {/* <DropDownWithImg /> */}
                    </li>
                    <li>
                    <IoMdNotificationsOutline  size={28}/>
                    </li>
                    <div className="position-relative box">
                    <li>
                    <Account/>
                    <div className="user_profile">
                        <Profile/>
                    </div>
                    </li>
                    </div>

                </ul>
            </div>


        {/* <Header/> */}

      </div>
        <div className ="outlet_section container_box">
            <Outlet/>
        </div>

      </div>
  </div>
    </div>
  );
};
