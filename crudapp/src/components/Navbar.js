import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="home--nav">

            {/* Link component takes a very simple prop to= that tells us where we want to redirect */}
            <Link to="/" className="home"> Home </Link>
            <Link to="/Campuses" className="campuses"> Campuses </Link>
            <Link to="/Students" className="students"> Students </Link>
        </div>
    )
}