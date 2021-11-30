import { Link } from "react-router-dom"

const NavItem = ({ to, value }) => {
    return (
        <li className="nav-item">
            <Link to={`/${to}`} className="nav-link text-white display-3">{value}</Link>
        </li>
    )
}

export default NavItem