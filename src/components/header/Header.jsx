import React from "react";
import { Container, Logo, LogoutBtn } from "../index"
import { Link, useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    return (
        <div>
            Hey!
        </div>

    );
}

export default Header;