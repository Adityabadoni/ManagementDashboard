import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./header.css"
import DropDownWithImg from "../Common/DropDownWithImg";
import Account from "../Common/Account";
import Profile from "../../Pages/Profile/Profile";

export const Header =()=>{
    return(
        <div className="header_section w-100 mb-3">

            <div className="d-flex justify-content-end w-100 py-3 px-5">
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

        </div>
    )
}