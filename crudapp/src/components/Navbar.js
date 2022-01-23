import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="nav-banner">
            {/* Link component takes a very simple prop to= that tells us where we want to redirect */}
            <img src="https://png.pngitem.com/pimgs/s/195-1957049_college-going-culture-web-icon-in-blue-hd.png" className="nav-logo"/>
            <Link to="/" className="nav-home"> Home </Link>
            <Link to="/Campuses" className="nav-campuses"> Campuses </Link>
            <Link to="/Students" className="nav-students"> Students </Link>
        </div>
    )
}