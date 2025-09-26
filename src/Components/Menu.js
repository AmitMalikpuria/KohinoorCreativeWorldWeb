
// import { useRouter } from "next/router"

import { Link, useNavigate } from "react-router-dom"

export default function Menu() {
    // const router = useRouter()

    const navigate = useNavigate();

    return (
        <>
            <ul className="navigation clearfix">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">AboutUs</Link></li>
                <li className="dropdown"><a href="#">Programs</a>
                    <ul>
                        <li><Link to="/">Program 1</Link></li>
                    </ul>
                </li>
                <li><Link to="/">Vision</Link></li>
                <li><Link to="/">Events</Link></li>
                <li><Link to="/">Story</Link></li>

                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
        </>
    )
}










