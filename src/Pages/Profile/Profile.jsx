import React, { useState } from "react";
import "./Profile.css"
import { CgProfile } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import Account from "../../Component/Common/Account";
import { TbLogout2 } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const Profile = () => {

    const [active , setActive] = useState(false)
  return (
    <div className="profile">
      <div className="profile_body">
        <ul className="mb-0 p-0 d-flex flex-column gap-3">
          <li className="d-flex gap-2 align-items-center"> <Account size={2} />John Doe</li>
          {/* <br/> */}
          <li className="d-flex gap-2 ms-2 align-items-center"> <VscAccount />My Profile</li> 
          <li className="d-flex gap-2 ms-2 align-items-center"><CiSettings />Setting</li> 
          <li className="d-flex gap-2 ms-2 align-items-center"> <TbLogout2 />LogOut</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
