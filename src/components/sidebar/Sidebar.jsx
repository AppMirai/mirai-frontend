import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineForm, AiOutlineTable, AiOutlineUser, AiOutlineStock, AiOutlineUserAdd, AiOutlineFileAdd } from 'react-icons/ai';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">   
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" style={{ textDecoration: "none" }}>
                        <li className="sidebarListItem">
                            <AiOutlineHome />
                            Home
                        </li>
                        </Link>
                        <Link to="/form" style={{ textDecoration: "none" }}>
                        <li className="sidebarListItem">
                            <AiOutlineForm />
                            Form
                        </li>
                        </Link>
                        <Link to="/table-user" style={{ textDecoration: "none" }}>
                        <li className="sidebarListItem">
                            <AiOutlineTable />
                            Table
                        </li>
                        </Link>
                        <Link to="/user" style={{ textDecoration: "none" }}>
                        <li className="sidebarListItem">
                            <AiOutlineUser />
                            User
                        </li>
                        </Link>
                        <Link to="/product" style={{ textDecoration: "none" }}>
                        <li className="sidebarListItem">
                            <AiOutlineStock />
                            Product
                        </li>
                        </Link>
                        <Link to="/newProduct" style={{ textDecoration: "none" }}>
                        <li className="sidebarListItem">
                            <AiOutlineFileAdd />
                            Add Product
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}