import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import footerLogo from "./../../assets/images/alireza4.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_firstCol">
                <div className="footer_social">
                    <a
                        href="https://t.me/alireza_arh12"
                        target="_blank"
                    >
                        <BsTelegram className="footer_icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/__alireza.hamidi__/"
                        target="_blank"
                    >
                        <BsInstagram className="footer_icon" />
                    </a>
                    <a
                        href="www.linkedin.com/in/alireza-hamidi-aa8547288"
                        target="_blank"
                    >
                        <BsLinkedin className="footer_icon" />
                    </a>
                    <a
                        href="https://github.com/Alireza-Hamidi2001"
                        target="_blank"
                    >
                        <SiGithub className="footer_icon" />
                    </a>
                </div>
                <div className="footer_logo">
                    <img src={footerLogo} alt="footer logo" />
                </div>
            </div>
            <div className="footer_secondCol">
                <div>
                    <h3>Resources</h3>
                    <p>Usage</p>
                    <p>Docs</p>
                    <p>Support</p>
                    <p>Hardware</p>
                </div>
                <div>
                    <h3>Pricing</h3>
                    <p>Overview</p>
                    <p>Flexible Data</p>
                    <p>High Valume</p>
                    <p>Enterprise</p>
                </div>
                <div>
                    <h3>Developers</h3>
                    <p>Forum</p>
                    <p>Projects</p>
                    <p>Open Source</p>
                    <p>GitHub</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Paranerships</p>
                    <p>Careers</p>
                </div>
            </div>
            <div className="footer_copyright">
                &copyright; 2025, <span>Alireza Hamidi </span> based
                on a design of <span>Jonas</span>.
            </div>
        </footer>
    );
}

export default Footer;
