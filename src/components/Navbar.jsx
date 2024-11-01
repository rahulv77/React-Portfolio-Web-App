import logo from "../assets/Logo.gif";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-8">
            <div className="flex flex-shrink-0 items-center">
                <img className="w-20" src={logo} alt="logo" href/>
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
            <a href="http://www.linkedin.com/in/sainath-vernekar-71200021a" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            <a href="https://github.com/rahulv77" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
            </a>
            <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
            </a>
            </div>
        </nav>
    );
};

export default Navbar;
