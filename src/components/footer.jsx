import "../styles/footer.css";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="FooterBox">
        <p>© Nico Lust 2025, All rights reserved.</p>
        <div className="Socials">
            <Link to="https://www.linkedin.com/in/nico-lust-ab8688339" className="SocialIcon">
                <FaLinkedin size={30} color="black" />
            </Link>
            <Link to="https://github.com/nicolust" className="SocialIcon">
                <FaGithub size={30} color="black" />
            </Link>
            <Link to="https://www.instagram.com/nicoakseli/" className="SocialIcon">
                <FaInstagram size={30} color="black" />
            </Link>
        </div>
        </div>
    )
}

export default Footer;