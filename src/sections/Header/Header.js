import "./Header.css";
import Logo from "../../assets/images/logo.png";
import {menuItems} from "../../Data/Header/MenuItems";
import NavItem, { NavItemDropdownMenu } from "../../components/NavItem/NavItem";

import Search from "../../components/Search/Search";
const Header = (props) => {
    return (
        <header className="navigation fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-white">
                    <a className="navbar-brand order-1" href="index.html">
                        <img className="img-fluid" width="100px" src={Logo} alt="Reader | Hugo Personal Blog Template" />
                    </a>
                    <div className="collapse navbar-collapse text-center order-lg-2 order-3" id="navigation">
                        <ul className="navbar-nav mx-auto">
                            {menuItems.map((menu, index) => {
                                return <NavItem items={menu} key={index} />;
                            })}
                        </ul>
                    </div>
                    <Search />
                </nav>
            </div>
        </header>
    )
}

export default Header