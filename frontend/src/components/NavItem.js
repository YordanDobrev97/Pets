import { Link } from "react-router-dom"

const NavItem = ({ value }) => {
    return (
        <li className="nav-item">
            <Link to={`/${value}`} className="nav-link text-white display-3">{value}</Link>
        </li>
    )
}

export default NavItem