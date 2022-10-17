import "./NavItem.css";



const NavItem = ({ items }) => {
    return (
        
        <>
            { items.submenu ? (
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">{items.title}</a>
                </li>
            ) : ( 
                <a className="nav-link" href="contact.html">{items.title}</a>
            )}
        </>

    )
}

// const NavItemDropdownMenu = () => {
//     return (
//         <li className="nav-item dropdown">
//             <a className="nav-link" href="/#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  About <i className="ti-angle-down ml-1"></i></a>
//             <div className="dropdown-menu">
//                 <a className="dropdown-item" href="about-me.html">About Me</a>
//                 <a className="dropdown-item" href="about-us.html">About Us</a>
//             </div>
//         </li>
//     )
// }
export default NavItem
// export { NavItemDropdownMenu }