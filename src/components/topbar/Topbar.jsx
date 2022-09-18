import React from "react";
import "./topbar.css";
import { MdNotificationsNone } from "react-icons/md";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Mirai Web Admin</span>
                </div>
                <div className="topRight">
                <div className="topbarIconContainer">
                        <MdNotificationsNone size={30}/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src="https://images.pexels.com/photos/13193334/pexels-photo-13193334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}